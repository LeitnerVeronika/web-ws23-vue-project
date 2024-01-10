const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require("axios"); // Import the cors middleware


app.use(cors());

app.get('/api/today', (req, res) => {
    const apiUrl = 'https://api.preisrunter.net/v1/ranking/today/';
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
