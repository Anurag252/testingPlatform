const express = require('express');
const bodyParser = require('body-parser');

const question = require('./routes/question.route'); // Imports routes for the products
const test = require('./routes/test.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://<uid>:<pwr>*@ds229790.mlab.com:29790/quizbank';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/question', question);
app.use('/test', test);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
