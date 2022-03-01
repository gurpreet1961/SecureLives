const mongoose = require('mongoose');
const DB = process.env.DATABASE;

//// old way
// mongoose.connect(DB, {
// useNewUrlParser: true,
// useCreateIndex: true,
// useUnifiedTopology: true,
// useFindAndModify: false
// }).then(() => {

//new way
mongoose.connect(DB).then(() => {
    console.log("connection successful");
}).catch((err) => console.log(err));
