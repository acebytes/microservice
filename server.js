const express = require('express')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
const { about, get_distance } = require('./api/controller')

app.get('/distance/:zipcode1/:zipcode2', get_distance)
app.get('/about', about)

app.listen(port, function(){
    console.log('Server started on port: ' + port);
});