import express, { json } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import User from "./models/User.js"
import Hobby from "./models/Hobby.js"
import Post from "./models/Post.js"
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import hobbyRoutes from "./routes/hobbyRoutes.js"
import loginRoute from "./routes/loginRoute.js"


dotenv.config()

const app = express();
app.use(json());
app.use(cors());

const port = 3030;
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect`));

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/hobbies', hobbyRoutes);
app.use('/login', loginRoute);

/* CHECKING API CONNECTIONS */
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); 
    } catch (error) {
        res.json({ message: error.message });
    }
});

app.get('/hobbies', async (req, res) => {
    try {
        const hobbies = await Hobby.find();
        res.json(hobbies); 
    } catch (error) {
        res.json({ message: error.message});
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts); 
    } catch (error) {
        res.json({ message: error.message });
    }
});
