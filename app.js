const forecast = require('./utils/forecast');
// require("dotenv").config();

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    forecast(address, (res, err) => {
        if (err) {
            return console.log(err);
        }
        console.log(res);
        // console.log(forecastData);
    });
}
