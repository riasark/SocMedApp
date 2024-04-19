import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        communities: [mongoose.Schema.Types.ObjectId],
        username:{
            type: String, 
            required: true, 
            unique: true
        },
        password:{
            type: String,
            min: 6, 
            max: 20
        },
        fname: String, 
        lname: String, 
        posts: [mongoose.Schema.Types.ObjectId],
        bio: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;