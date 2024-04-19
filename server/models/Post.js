import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    }, 
    hobby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hobby"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
        ref: "Post",
        default: null
    },
    content: String
});

const Post = mongoose.model('Post', postSchema);

export default Post;