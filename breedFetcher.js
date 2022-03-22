const request = require('request');

/*
Request info based on breed name and callback is basically the sent request
*/

const breedDescriptionFetcher = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search' + breedname, (error, response, body) => {
    if (error) {
      console.log('error: unable to connect', error);
    }
    if (response) {
      console.log('statusCode: code for your request ', response && response.statusCode);
    }
    console.log('body:', body);
    if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Breed not defined.');
      } else {
        console.log(data)
        let summary = data[0].description;
        console.log(summary);
      }
    }
  });
};

module.exports = breedDescriptionFetcher;