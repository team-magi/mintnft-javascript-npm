var Web3 = require('web3');
var { Network } = require('./constants');
const contract = require('../abi/nexusfactory.json');

class Nft {
    constructor(conf = {}) {
        this.web3 = new Web3(conf.rpcUrl || Network[conf.networkName].rpc);
        this.contractAddress = Network[conf.networkName].address;
        this.nftContract = new this.web3.eth.Contract(contract, Network[conf.networkName].address);
    }

    async mint(address, tokenURI, secret) {
        var account = this.web3.eth.accounts.privateKeyToAccount(secret);
        const nonce = await this.web3.eth.getTransactionCount(account.address, 'latest');
        const tx = {
            'from': account.address,
            'to': this.contractAddress,
            'nonce': nonce,
            'gas': 500000,
            'data': this.nftContract.methods.mintNft(address, tokenURI).encodeABI()
        };
        const signPromise = this.web3.eth.accounts.signTransaction(tx, account.privateKey);
        return new Promise((resolve, reject) => {
            signPromise.then((signedTx) => {
                this.web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
                    if (!err) {
                        resolve(hash);
                    } else {
                        reject(err);
                    }
                });
            }).catch((err) => {
                reject(err);
            });
        })
    }
}

module.exports = Nft;
