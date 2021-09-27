//our server
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

//importing routes
const routes = require('./routes/api');

dotenv.config();

// Connect Database
connectDB();

//data parsing
app.use(express.json());

app.use(cors());

//use routes
app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));