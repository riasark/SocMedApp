import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    }, 
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Communities"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    likes: {
        type: Number, 
        default: 0
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    is_quote: Boolean,
    quote_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;