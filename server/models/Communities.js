import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
    name: String, 
    list_of_users: [mongoose.Schema.Types.ObjectId],
    posts: [mongoose.Schema.Types.ObjectId]
})