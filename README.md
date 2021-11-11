# mint-nft npm package

Use our npm package by downloading from npm registry:
https://www.npmjs.com/package/mint-nft

For how-to, check out the Wiki page:
https://nifty-3.gitbook.io/mint-nft-npm/getting-started

## IPFS

Use 3rd party Pinata platform to manage IPFS, please register [Pinata](https://pinata.cloud) first. 

## Installation

Using npm:

```bash
$ npm install mint-nft
```

Using yarn:

```bash
$ yarn add mint-nft
```

## Code example 

```js
var mintMagiNft = require('mint-nft');
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
