const request = require('request');


const fetchMyIP = () => {
  return request('https://api.ipify.org/');
};


console.log(ip)
