import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username:{
            type: String, 
            required: true,
            min: 6,
            max: 20, 
            unique: true
        },
        password:{
            type: String,
            required: true, 
            min: 6,
            max: 20
        },
        fname:{
            type: String,
            required: true
        },
        lname:{
            type:String,
            required: true
        },
        followersid:{
            type: [mongoose.Schema.Types.ObjectId],
            default: []
        },
        followingid:{
            type: [mongoose.Schema.Types.ObjectId],
            default: []
        },
        postsid: {
            type: [mongoose.Schema.Types.ObjectId],
            default: []
        },
        bio: String
    }
)