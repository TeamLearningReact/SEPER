const express = require('express');

const router = express.Router();

//import model
const ArticlePost = require('../models/articles');

//root route
router.get('/', (req, res) => {
    res.send('This is the main page!');
})

//see if database objects are appearing on page & console
//localhost:3001/api should see this
router.get("/api", (req, res) => {
    
    ArticlePost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

//another test to see if data is showing up on page
router.get('/name', (req, res) => {
    const data = {
        username: 'kim',
        age: 24
    };
    res.json(data);
});

module.exports = router;