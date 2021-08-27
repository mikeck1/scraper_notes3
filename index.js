const axios = require('axios');

// const instance = axios.create({
//     baseURL: '',
//     timeout: 1000,

// });
let URL = 'https://api.airbnb.com/v2/explore_tabs'
let headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "User-Agent": "Airbnb/19.18 AppVersion/19.18 iPhone/12.2 Type/Phone",
    "accept-encoding": "br, gzip, deflate",
    "content-type": "application/json",
    "x-airbnb-api-key": "915pw2pnf4h1aiguhph5gc5b2",
    "user-agent": "Airbnb/19.18 AppVersion/19.18 iPhone/12.2 Type/Phone",
    "x-airbnb-screensize": "w=375.00;h=812.00",
    "x-airbnb-carrier-name": "T-Mobile",
    "x-airbnb-network-type": "wifi",
    "x-airbnb-currency": "USD",
    "x-airbnb-locale": "en",
    "x-airbnb-carrier-country": "us",
    "accept-language": "en-us",
    "airbnb-device-id": "9120210f8fb1ae837affff54a0a2f64da821d227",
    "x-airbnb-advertising-id": "C326397B-3A38-474B-973B-F022E6E4E6CC"
}
var config = {
    headers: headers
};

let params = {
    'query': 'Big Bear, CA'
}

axios.get(URL,
    null,
    config).then(response => {
        const data = response.data.results;
        console.log(data)
    }).catch(error => {
        console.log(error);
    })

