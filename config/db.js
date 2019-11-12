'use strict'
const mongoose      = require('mongoose');
mongoose.Promise    = global.Promise;

mongoose.connect(process.env.DB_URL || "mongodb://user:Ruber1@ds061601.mlab.com:61601/heroku_4dvsgwzl", { useNewUrlParser: true });
mongoose.connection.once('open', ()=> console.log(`Connected to Mongo at ${process.env.DB_URL}`));

module.exports = mongoose;