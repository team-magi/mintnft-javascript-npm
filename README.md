# nifty-toolkit npm package

Use our npm package by downloading from npm registry:
https://www.npmjs.com/package/mint-nft

For how-to, check out the Wiki page:
https://nifty-3.gitbook.io/nifty-toolkit-npm/getting-started

## IPFS

Use 3rd party Pinata platform to manage IPFS, please register [Pinata](https://pinata.cloud) first. 

## Installation

Using npm:

```bash
$ npm install nifty-toolkit
```

Using yarn:

```bash
$ yarn add nifty-toolkit
```

## Code example 

```js
var mintMagiNft = require('nifty-toolkit');
const fs = require('fs');
const FormData = require('form-data');

var ipfs = new mintMagiNft.Ipfs({
    pinKey: 'yourPinataApiKey',
    pinSecret: 'yourPinataSecretApiKey',
});

ipfs.pinJSONToIPFS({
    name: '',
    images: ''
}).then(res => {
    console.log(res);
})

var fd = new FormData();
fd.append("file", fs.createReadStream('png'), Date.now() + ".jpg");

ipfs.pinFileToIPFS(fd).then(res => {
    console.log(res);
})

var nft = new mintMagiNft.Nft({
    networkName: 'mumbai',
    // rpcUrl: 'https://rpc-mumbai.maticvigil.com',
});

or

var nft = new mintMagiNft.Nft({
    networkName: 'cronos-testnet',
});

nft.mint("yourAddress", "yourTokenURI", "yourPrivateKey").then(res => {
    console.log(res);
});

```
