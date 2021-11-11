var npmMintNft = require('../lib');
const fs = require('fs');
const FormData = require('form-data');

var ipfs = new npmMintNft.Ipfs({
    pinKey: 'fill_in_your_pinata_key',
    pinSecret: 'fill_in_your_pinata_secret',
});

ipfs.pinJSONToIPFS({
    name: 'magi',
    images: 'test'
}).then(res => {
    console.log(res);
})

var fd = new FormData();
fd.append("file", fs.createReadStream('./emerald.png'), Date.now() + ".jpg");

ipfs.pinFileToIPFS(fd).then(res => {
    console.log(res);
})
