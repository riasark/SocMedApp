import mongoose from "mongoose";

const hobbySchema = mongoose.Schema({
    name: String, 
    similar_hobbies: Array
})

const Hobby = mongoose.model('Hobby', hobbySchema);

export default Hobby;