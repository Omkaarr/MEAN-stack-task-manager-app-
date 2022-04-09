const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/api.route');
const path = require('path');

require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.mongodbUri, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


app.use(express.static(path.join(__dirname + '/dist/task-manger')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'dist/task-manger/index.html'));
})


app.listen(port);