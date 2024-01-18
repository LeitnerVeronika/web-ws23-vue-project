const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require("axios");

/** Feature Flag for API Changes for the new API Version the value should be false*/
const isDepricatedApiURL = false;

app.use(cors());

/** API Call for the HomeView to receive the most relevant price changes of the day*/
app.get('/api/today', (req, res) => {
    let apiUrl;
    if(isDepricatedApiURL){
        apiUrl = 'https://preisrunter.at/api/ranking/today/'
    }else {
        apiUrl = 'https://api.preisrunter.net/v1/ranking/today/?region=at';
    }
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

/** API Call for search with productName and markets parameter */
app.get('/api/search', (req, res) => {
    let searchString = req.query.productName;
    searchString = searchString.split(" ");
    let productName = searchString.join('+');
    const marketString = req.query.markets;
    let apiUrl;
    if(marketString === "undefined"){
        apiUrl = 'https://api.preisrunter.net/v1/products/?q=' + productName;
    }else {
        apiUrl = 'https://api.preisrunter.net/v1/products/?q=' + productName + '&shops=' + marketString;
    }
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
