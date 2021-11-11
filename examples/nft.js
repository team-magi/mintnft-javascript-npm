var npmMintNft = require('../lib');

var nft = new npmMintNft.Nft({
    // If you are testing on cronos: 
    // networkName: 'cronos-testnet',
    // rpcUrl: "https://cronos-testnet-3.crypto.org:8545",

    // If you are testing on polygon: 
    networkName: 'mumbai',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
});

nft.mint("recipient_address", "ipfs_hash", "account_private_key").then(res => {
    console.log(res);
});
