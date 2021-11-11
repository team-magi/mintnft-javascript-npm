var npmMintNft = require('../lib');

var nft = new npmMintNft.Nft({
    networkName: 'cronos-testnet',
    // rpcUrl: 'https://rpc-mumbai.maticvigil.com',
});

nft.mint("recipient_address", "ipfs_hash", "account_private_key").then(res => {
    console.log(res);
});
