//our server
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
//const express = require("express");
const router = express.Router();

//importing routes
const routes = require('./routes/api');
const ArticlePost = require('./models/articles');

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

router.get('/find', (req, res) => {
    ArticlePost.find()
      .then((allarticles) => res.json(allarticles))
      .catch((err) => res.status(404).json({ noarticlesfound: "No Books found" }));
  });