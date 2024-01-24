const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require("axios"); // Import the cors middleware

const isDepricatedURL = false;

app.use(cors());

app.get('/api/today', (req, res) => {
    let apiUrl;
    // if(isDepricatedURL){
        apiUrl = 'https://preisrunter.at/api/ranking/today/'
    // }else {
    //     apiUrl = 'https://api.preisrunter.net/v1/ranking/today/?apiKey=5twKwCM8wFC9vRkF8CBoA2CCD34Rah';
    // }
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});

app.get('/api/search', (req, res) => {
    let searchString = req.query.productName;
    searchString = searchString.split(" ");
    let productName = searchString.join('+');
    const marketString = req.query.markets;
    let apiUrl;
    if(isDepricatedURL) {
        if (marketString === "undefined") {
            apiUrl = 'https://preisrunter.at/api/search/products/?product=' + productName;
        } else {
            apiUrl = 'https://preisrunter.at/api/search/products/?product=' + productName + '&shops=' + marketString;
        }
    }
    else {
            apiUrl = 'https://api.preisrunter.net/v1/products/?q=' + productName + '&apiKey=5twKwCM8wFC9vRkF8CBoA2CCD34Rah' ;
    }
    console.log(apiUrl)
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});

app.get('/api/search/markets', (req, res) => {
    let apiUrl;
    // if(isDepricatedURL){
        apiUrl = 'https://preisrunter.at/api/search/markets/'
    // }else {
    //     apiUrl = 'https://api.preisrunter.net/v1/shops?apiKey=5twKwCM8wFC9vRkF8CBoA2CCD34Rah';
    // }
    console.log(apiUrl)
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
