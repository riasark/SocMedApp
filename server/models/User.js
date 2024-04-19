import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        hobbies: {
            type: [mongoose.Schema.Types.ObjectId],
            default: []
        },
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
        bio: String
})

const User = mongoose.model('User', userSchema);

export default User;