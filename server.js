require('dotenv').config();
const express = require('express');

const app = express();

app.get('/restaurants', (req, res) => {
    res.send('these are the restaurants');
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});