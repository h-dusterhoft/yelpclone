require('dotenv').config();
const express = require('express');

const app = express();

// get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            restaurants: ['McDonalds', 'Wendys'],
        },
    });
});

// get individual restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
    
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});