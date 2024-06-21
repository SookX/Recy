const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
const port = process.env.PORT;
const DB = process.env.DB;

mongoose.connect(DB, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}).then(con => {
    console.log("Connected with the DB");
})

app.listen(port, '127.0.0.1', () => {
    console.log(`Listeting on port: ${port}`);
})