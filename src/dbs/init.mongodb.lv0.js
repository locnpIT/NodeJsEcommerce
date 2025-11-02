'use strict'


const mongoose = require('mongoose');

const connectString = `mongodb://localhosT:27017/shopDEV`
mongoose.connect(connectString).then( _ => console.log("Connected DB lv0") ).catch( err => console.log(err) );


