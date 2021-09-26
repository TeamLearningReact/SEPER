//Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
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
    claim: {
        type: String,
        required: true
    },
    evidence_level: {
        type: String,
        required: true
    },
    SE_practice: {
        type: String,
        required: true
    }
});

//Model
const ArticlePost = mongoose.model('ArticlePost', ArticleSchema);

module.exports = ArticlePost;