'use strict'

const {Schema, model, default: mongoose} = require('mongoose') 

const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'Keys';

var keyTokenSchema = new mongoose.Schema({

    user: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Shop'
    },
    publicKey:{
        type: String,
        required: true,
    },
    privateKey:{
        type: String,
        required: true,
    },
    refreshToken:{
        type: Array,
        default: []
    },
   

}, {
    collection: COLLECTION_NAME, 
    timestamps: true
});

module.exports = mongoose.model(DOCUMENT_NAME, keyTokenSchema);
