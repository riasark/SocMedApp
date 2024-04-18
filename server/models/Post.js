import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creatorid: Number, 
    likescount: Number, 
    timestamp: Date,
    text: String,
    childpost: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    parentpost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
})