var npmMintNft = require('../lib');
const fs = require('fs');
const FormData = require('form-data');

var ipfs = new npmMintNft.Ipfs({
    // make sure you fill in the right key/secret from Pitana
    pinKey: 'fill_in_your_pinata_key',
    pinSecret: 'fill_in_your_pinata_secret',
});

ipfs.pinJSONToIPFS({
    name: 'nifty-toolkit',
    images: 'https://ipfs.io/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP'
}).then(res => {
    console.log(res);
})

var fd = new FormData();
fd.append("file", fs.createReadStream('./emerald.png'), Date.now() + ".jpg");

ipfs.pinFileToIPFS(fd).then(res => {
    console.log(res);
})
