const axios = require('axios');

class Ipfs {
  constructor(conf = {}) {
    this.pinKey = conf.pinKey;
    this.pinSecret = conf.pinSecret;
  }

  async pinJSONToIPFS(JSONBody) {
    return axios
      .post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, JSONBody, {
        headers: {
          pinata_api_key: this.pinKey,
          pinata_secret_api_key: this.pinSecret,
        }
      })
      .then(function (response) {
        return {
          success: true,
          pinataUrl: "https://ipfs.io/ipfs/" + response.data.IpfsHash,
          hash: response.data.IpfsHash,
        };
      })
      .catch(function (error) {
        return {
          success: false,
          message: error.message,
        }

      });
  };

  pinFileToIPFS(data) {
    return axios
      .post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, data, {
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: this.pinKey,
          pinata_secret_api_key: this.pinSecret
        }
      })
      .then(function (response) {
        return {
          success: true,
          pinataUrl: "https://ipfs.io/ipfs/" + response.data.IpfsHash,
          hash: response.data.IpfsHash,
        };
      })
      .catch(function (error) {
        return {
          success: false,
          message: error.message,
        }
      });
  };
}

module.exports = Ipfs;
