var mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user_name: {type: String},
    content: {type: String}
}, {timestamps: true})

const PostSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    content: {type: String, required: true},
    comment: [CommentSchema]
}, {timestamps: true})


module.exports = mongoose.model('Post', PostSchema);