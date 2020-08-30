const request = require('request');

request('https://www.dreamincode.dev', (error, response, body) => {
  console.log(error);
  console.log(response);
  console.log(body);
});

