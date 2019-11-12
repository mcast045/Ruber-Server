'use strict'
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const rideSchema = new Schema({
    pickUp: {
        type: String,
        required: true,
        trim: true
    },
    dropOff: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
});

const Ride = mongoose.model('Ride', rideSchema);


module.exports = Ride;