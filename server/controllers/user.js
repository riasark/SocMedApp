import User from "../models/User.js";
import Hobby from "../models/Hobby.js"

export const userprof = async (req, res) => {
    try {
        const { user } = req.params;
        const userInfo = await User.findById(user);
        res.json(userInfo);
    }catch(err){
        res.json({message: err.message});
    }
}

export const userHobbies = async (req, res) => {
    try {
        const { user } = req.params;
        const userInfo = await User.findById(user);
        const hobbies = userInfo.hobbies;
        const toReturn = [];
        for (const hobbyId of hobbies) { 
            const hob = await Hobby.findById(hobbyId); 
            toReturn.push(hob.name);
        }
        res.json(toReturn);
    } catch(err) { 
        res.json({ message: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(user && password == user.password){
            res.json(user);
        }
        else{
            res.json({message: "Login unsuccessful."});
        }
    }catch(err){
        res.json({message: err.message});
    }
}
