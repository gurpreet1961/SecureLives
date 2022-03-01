const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
//DB and PORT is in config.env which will not upload on github
const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log('hello my middleware');
}

app.get('/', (req, res) => {
    res.send('HOME');
});
app.get('/about', middleware, (req, res) => {
    res.send('ABOUT');
});
app.get('/contact', (req, res) => {
    res.send('CONTACT');
});
app.get('/signin', (req, res) => {
    res.send('SIGNIN');
});
app.get('/signup', (req, res) => {
    res.send('SIGNUP');
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`server is running at ${PORT} port`);
})