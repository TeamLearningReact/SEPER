//This is test to see if we can connect to database
//Schema

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const ArticlePost = mongoose.model("ArticlePost", ArticleSchema);

//mock data - testing to see if we can add to the database from here:
const data = {
  title: "TestTitle3",
  body: "TestBody3",
};

//mock data - save to database
const newArticle = new ArticlePost(data); //instance of the model
//mock data - save to database:
//un-comment below to save to database.

// newArticle.save((error) => {
//     if(error){
//         console.log('Oops something happened');
//     } else {
//         console.log('data has been saved');
//     }
// });

module.exports = ArticlePost;
