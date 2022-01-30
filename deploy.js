const request = require('request');
const acceptableStatusCodes = ['200', '201'];
const fs = require('fs');
require('dotenv').config();

const options = {
  assetType: 'WEB',
  url: 'https://192.168.122.90:9443',
  containerRef: '2063.1e6cb6c4-716e-49f8-8df6-c95e84e2624d',
  username: process.env.BPM_USER,
  password: process.env.BPM_PASSWORD
};

const deploy = async function(file, options) {
  return new Promise(resolve => {
    const formData = {
      asset: fs.createReadStream(file),
      assetType: options.assetType,
      localLastMod: Date.now()
    };
    var url = `${options.url}/rest/bpm/wle/pd/v1/managedAsset?containerRef=${options.containerRef}`;

    request.post(
      {
        url,
        formData,
        auth: {
          username: options.username,
          password: options.password
        },
        strictSSL: false
      },
      (err, httpResponse, body) => {
        if (err) {
          console.warn('upload failed:', err);
          resolve(false);
        } else {
          if (!acceptableStatusCodes.includes(httpResponse.statusCode.toString())) {
            console.warn(`File ${file} upload failed`, httpResponse.statusCode, httpResponse.statusMessage);
            resolve(false);
          } else {
            console.log('Deployed successfully');
            resolve(true);
          }
        }
      }
    );
  });
};

deploy('./dist/zip/akademia-frontend.zip', options);
