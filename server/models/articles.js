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
    journalName: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    volume: {
        type: String
    },
    number: {
        type: String
    },
    pages: {
        type: String,
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


