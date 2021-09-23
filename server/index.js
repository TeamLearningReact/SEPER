//our server
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const mongoose  = require('mongoose');

const app = express();

//importing routes
const routes = require('./routes/api');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

const port = process.env.PORT || 3001;

app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));