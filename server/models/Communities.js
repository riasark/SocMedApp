import mongoose from "mongoose";

const communitySchema = mongoose.Schema({
    name: String, 
    list_of_users: Array,
    posts: Array
})

const Community = mongoose.model('Community', communitySchema);

export default Community;