const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const URI = 'mongodb+srv://Sid:Siddhu99@cluster0.gu1zj.mongodb.net/GodsOwnTourism?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for DB Errors
db.on('error', (err) => {
    console.log(err);
});

// Init App
const app = express();

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.render('index.html');
});

// Start Server
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});