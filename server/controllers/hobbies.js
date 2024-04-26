import User from "../models/User.js";
import Hobby from "../models/Hobby.js"

export const joinHobby = async (req, res) => {
    try {
        const { author, hobby } = req.params;
        const user = User.findById(author);
        user.hobbies.push(hobby);
        res.json(true); 
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