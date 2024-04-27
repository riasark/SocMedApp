import User from "../models/User.js";
import Hobby from "../models/Hobby.js"
import mongoose from "mongoose";

export const joinHobby = async (req, res) => {
    try {
        const { author, hobby } = req.params;
        const user = await User.findById({_id: author});
        const hobbyId = new mongoose.Types.ObjectId(hobby);
        user.hobbies.push(hobbyId);
        await user.save();
        res.json(["Success", user]); 
    }catch(err){
        res.json({message: err.message});
    }
}

export const hobbyId = async (req, res) => {
    try {
        const { hobbyName } = req.body;
        const hobbyId = await Hobby.findOne({name: hobbyName});
        res.json(hobbyId._id);
    }catch(err){
        res.json({message: err.message});
    }
}

export const hobbyInfo = async (req, res) => {
    try {
        const { hobbyId } = req.params;
        const hobby = await Hobby.findOne({_id: hobbyId});
        res.json(hobby.name);
    }catch(err){
        res.json({message: err.message});
    }
}