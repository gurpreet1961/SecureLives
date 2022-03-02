const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
// const User = require('./model/userSchema');

//we link the router file to make our route easy
app.use(require('./router/auth'));

//DB and PORT is in config.env to make then secure(so that no one knows)
const PORT = process.env.PORT;


// Middleware
const middleware = (req, res, next) => {
    console.log('hello my middleware');
    next();
}

// app.get('/', (req, res) => {
//     res.send('hello from server app js');
// });
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