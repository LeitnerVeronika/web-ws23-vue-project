const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Import the cors middleware


app.use(cors());

app.get('/api/today', (req, res) => {
    // Replace this with your actual products or products retrieval logic
    const axios = require('axios');

// Define the API endpoint
    const apiUrl = 'https://preisrunter.at/api/ranking/today/';

// Make a GET request
    axios.get(apiUrl)
        .then(response => {
            // Handle the successful response
            console.log('Data from the API:', response.data);
            res.json(response.data)

        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching products:', error);
        });

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
