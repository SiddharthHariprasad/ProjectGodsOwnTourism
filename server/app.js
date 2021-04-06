import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
//import bodyParser from 'body-parser';
import cors from 'cors';

import cabRoutes from './routes/cabs.js';

const URI = 'mongodb+srv://Sid:Siddhu99@cluster0.gu1zj.mongodb.net/GodsOwnTourism?retryWrites=true&w=majority';
let PORT = process.env.PORT || 5000;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// Init App
const app = express();

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// parse application/json
app.use(express.json({ limit: "30mb", extended: true }));

app.use(cors());


app.use('/cabs', cabRoutes);


// // Home Route
// app.get('/', (req, res) => {
//     res.render('index.html');
// });