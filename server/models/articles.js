//Schema
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    source: {
        type: String
    },
    year: {
        type: Date,
        required: true
    },
    doi: {
        type: String
    },
    // claim: {
    //     type: String,
    //     required: true
    // },
    // evidence_level: {
    //     type: String
    // },
    SE_practice: {
        type: String
    }
});

//Model - 1st argument is the name you will see on MongoDB
const ArticlePost = mongoose.model('ArticlePost', ArticleSchema);

module.exports = ArticlePost;