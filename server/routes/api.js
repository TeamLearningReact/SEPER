const { response, request } = require("express");
const express = require("express");
const router = express.Router();

//import model
const ArticlePost = require("../models/articles");

//root route
//see if database objects are appearing on page & console
router.get("/", (req, res) => {

    ArticlePost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataerror);
        });
});

//define POST request
//save new data into our database
router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newArticlePost = new ArticlePost(data);

  newArticlePost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "sorry, internal server errors" });
    } else {
      res.json({
        msg: "Your data has been saved!!!",
      });
    }
  });
});

// router.route("/articles").get((req, res) => {
//   ArticlePost.find().then((foundArticles) => res.json(foundArticles));
// });

// router.get("/getarticles", function (req, res, next) {
//   res.status(200).json({ articles: DUMMY_ARTICLES });
// });

// router.route("/").get(function (req, res) {
//   ArticlePost.find(function (err, articledata) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(articledata);
//     }
//   });
// });

module.exports = router;
