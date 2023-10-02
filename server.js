require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

// middleware
//app.use(morgan('dev'));
app.use(express.json());

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
    console.log(req.params);
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: 'Panda Express',
        },
    });
});

// create restaurant
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            restaurant: 'Whataburger',
        },
    });
});

// update restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: 'Canes',
        },
    });
});

// delete restaurant 
app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: "success"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});