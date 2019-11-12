'use strict'
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/

const userSchema = new Schema({
    isDriver: {
        type: Boolean,
        default: false
    },
    balance: {
        type: String,
        required: false,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    first: {
        type: String,
        required: true,
        trim: true
    },
    last: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    imgUrl: {
        type: String,
        required: false,
        trim: true
    },
});

const User = mongoose.model('User', userSchema);


module.exports = User;