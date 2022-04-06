const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static('public'));
// parse incoming string or array data
//The express.urlencoded({extended: true}) method is a method built into Express.js. 
//It takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object. 
//The {extended: true} option informs our server that there may be sub-array data nested in it as well, 
//so it needs to look as deep into the POST data as possible to parse all of the data correctly.
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
//The express.json() method takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object. 
//Both of these middleware functions need to be set up every time you create a server that's looking to accept POST data.
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});