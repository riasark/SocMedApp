import express, { json } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import User from "./models/User.js"
import Hobby from "./models/Hobby.js"
import Post from "./models/Post.js"
import postRoutes from "./routes/postRoutes.js"

dotenv.config()

const app = express();
app.use(json());
app.use(cors());
app.use(bodyParser.json())

const port = 3030;
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect`));

app.use('/posts', postRoutes);

/* CHECKING API CONNECTIONS */
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/hobbies', async (req, res) => {
    try {
        const hobbies = await Hobby.find();
        res.status(200).json(hobbies); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
