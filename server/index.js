//our server
const express = require('express');
const connectDB = require('./config/db');
//const cors = require('cors');
const mongoose  = require('mongoose');
const path = require('path');

const app = express();

//importing routes
const routes = require('./routes/api');

// Connect Database
connectDB();

// cors
//app.use(cors({ origin: true, credentials: true }));

// Init Middleware
//app.use(express.json({ extended: false }));
//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;

//use routes
app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));