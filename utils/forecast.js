const got = require('got');
require('dotenv').config();

const forecast = (address,callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(address) + "&appid="+process.env.API_KEY;

    got(url,{responseType:'json',method:"POST"}).then(response => {
        callback(response.body,undefined);
    }).catch(error => {
        callback(undefined,"error : "+error);
    });
}

module.exports = forecast;