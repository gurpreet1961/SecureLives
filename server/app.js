const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const app = express();
dotenv.config({ path: './config.env' });
require('./db/conn');
const paymentRoutes = require("./router/auth");
app.use(express.json());
// const User = require('./model/userSchema');

//we link the router file to make our route easy
app.use(require('./router/auth'));
app.use('/public', express.static('public'));
app.use(cors());

//DB and PORT is in config.env to make then secure(so that no one knows)
const PORT = process.env.PORT



// app.get('/profile', (req, res) => {
//     res.send('prifile');
// });
// app.get('/contact', (req, res) => {
//     res.send('CONTACT');
// });
app.get('/signin', (req, res) => {
    res.send('SIGNIN');
});
app.get('/signup', (req, res) => {
    res.send('SIGNUP');
});

app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT} port`);
})
