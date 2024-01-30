const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require("axios");

/** Feature Flag for API Changes for the new API Version the value should be false*/
const isDepricatedApiURL = false;

app.use(cors());

/** API Call for the HomeView to receive the most relevant price changes of the day
 *  this uses the old API call because no information for the correct call with the new version is available*/
app.get('/api/today', (req, res) => {
    let apiUrl;
//     if(isDepricatedApiURL){
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

/** API call for search with productName and markets parameter */
app.get('/api/search', (req, res) => {
    let searchString = req.query.productName;
    searchString = searchString.split(" ");
    let productName = searchString.join('+');
    const marketString = req.query.markets;
    let apiUrl;
    if(isDepricatedApiURL) {
        if (marketString === "undefined") {
            apiUrl = 'https://preisrunter.at/api/search/products/?product=' + productName;
        } else {
            apiUrl = 'https://preisrunter.at/api/search/products/?product=' + productName + '&shops=' + marketString;
        }
    }
    else {
            apiUrl = 'https://api.preisrunter.net/v1/products/?q=' + productName + '&apiKey=5twKwCM8wFC9vRkF8CBoA2CCD34Rah' ;
    }
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});

/** get available markets from the API
 *  this is using the old API call thus no information for a suitable call with the v1 version is available */
app.get('/api/search/markets', (req, res) => {
    let apiUrl;
    // if(isDepricatedApiURL){
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
