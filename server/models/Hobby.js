import mongoose from "mongoose";

const hobbySchema = mongoose.Schema({
    name: String, 
    list_of_users: Array,
    posts: Array
})

const Hobby = mongoose.model('Hobby', communitySchema);

export default Hobby;