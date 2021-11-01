var mintMagiNft = require('../lib');

var nft = new mintMagiNft.Nft({
    apiUrl: 'https://rpc-mumbai.maticvigil.com'
});

// console.log(nft);
nft.mint("1", "test", "1").then(res => {
    console.log(res);
});
