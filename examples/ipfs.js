var npmMintNft = require('../lib');
const fs = require('fs');
const FormData = require('form-data');

var ipfs = new npmMintNft.Ipfs({
    pinKey: '1',
    pinSecret: '1',
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
