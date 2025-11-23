require('dotenv').config();
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

// console.log(`Proocess:: `, process.env);
// init middleware
// npm i morgan --save-dev
// npm i helmet --save-dev
// khi dev thì bật mode này
app.use(morgan('dev'));
app.use(helmet());
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// morgan("dev")
// morgan("common")
// morgan("short")
// morgan("tiny")
// khi chạy production thì bật mode này
// morgan("combined")

// init db
require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init routes

app.use('/', require('./routes/index'));

// handling error

module.exports = app;

