const { response, request } = require('express');
const express = require('express');
const router = express.Router();

//import model
const ArticlePost = require('../models/articles');

//root route
//see if database objects are appearing on page & console
router.get("/", (req, res) => {
    
    ArticlePost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

//define POST request
//save new data into our database
router.post("/save", (req, res) => {

    console.log('Body: ', req.body);
    const data = req.body;

    const newArticlePost = new ArticlePost(data);

    newArticlePost.save((error) => {
        if(error) {
            res.status(500).json({ msg: 'sorry, internal server errors' });
        }else{
            res.json({
                msg: 'Your data has been saved!!!'
            });
        
        }
    });
    
});

router.get("/articles", (req, res) => {
    ArticlePost.find().then(foundArticles => res.json(foundArticles))
})


module.exports = router;