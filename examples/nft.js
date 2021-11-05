var mintMagiNft = require('../lib');

var nft = new mintMagiNft.Nft({
    networkName: 'cronos-testnet',
    // rpcUrl: 'https://rpc-mumbai.maticvigil.com',
});

nft.mint("1", "test", "1").then(res => {
    console.log(res);
});
