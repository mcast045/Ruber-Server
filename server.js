const express       = require('express');
const cors          = require('cors');
const usersRoutes   = require('./routes/users');
const ridesRoutes   = require('./routes/rides');

const app = express();
const port = 5000;

// require .env and db.js
require('dotenv').config();
require('./config/db');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cors());

// routes
app.use('/api/users', usersRoutes);
app.use('/api/rides', ridesRoutes);


app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;