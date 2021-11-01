var Web3 = require('web3');
const contract = require("../abi/nexusfactory.json");
const contractAddress = "0xE5d7A2Cc38a246DA3b67ba638e07050a05D3F0CE";

class Nft {
    constructor(conf = {}) {
        this.web3 = new Web3(conf.apiUrl);
        this.nftContract = new this.web3.eth.Contract(contract, contractAddress);
    }

    async mint(address, tokenURI, secret) {
        var account = this.web3.eth.accounts.privateKeyToAccount(secret);
        const nonce = await this.web3.eth.getTransactionCount(account.address, 'latest');
        const tx = {
            'from': account.address,
            'to': contractAddress,
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
