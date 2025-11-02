const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

// init middleware
// npm i morgan --save-dev
// npm i helmet --save-dev
// khi dev thì bật mode này
app.use(morgan('dev'));
app.use(helmet());
app.use(compression())
// morgan("dev")
// morgan("common")
// morgan("short")
// morgan("tiny")
// khi chạy production thì bật mode này
// morgan("combined")

// init db

// init routes

app.get('/', (req, res, next) => {
    const strCompress = 'Hello Loc';
    return res.status(200).json({
        message: "Welcome to ECM Nodejs",
        metadata: strCompress.repeat(1000)
    })
})

// handling error

module.exports = app;

