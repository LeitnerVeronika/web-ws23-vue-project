const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require("axios"); // Import the cors middleware


app.use(cors());

app.get('/api/today', (req, res) => {
    const apiUrl = 'https://preisrunter.at/api/ranking/today/';
    axios.get(apiUrl)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});

app.get('/api/markets', (req, res) => {
    const apiUrl = 'https://preisrunter.at/api/search/markets/';

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

    const apiUrl = 'https://preisrunter.at/api/search/products/?product=' + productName + '&' + marketString;

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
