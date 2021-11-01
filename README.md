# mint-magi-nft

## Pinata

ipfs [Pinata](https://pinata.cloud)

## Installing

Using npm:

```bash
$ npm install mint-magi-nft
```

Using yarn:

```bash
$ yarn add mint-magi-nft
```

## Example

```js
var mintMagiNft = require('mint-magi-nft');
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
    apiUrl: 'https://rpc-mumbai.maticvigil.com'
});

nft.mint("yourAddress", "yourTokenURI", "yourPrivateKey").then(res => {
    console.log(res);
});

```
