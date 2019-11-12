const express       = require('express');
const path          = require('path');
const cors          = require('cors');
const usersRoutes   = require('./routes/users');
const ridesRoutes   = require('./routes/rides');

const app = express();
const port = process.env.PORT || 5000;

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

//Serve up static assets if in production (for heroku)
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static("client/build"));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname + 'client', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;