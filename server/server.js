import express, { json } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(json());
app.use(cors());

const port = 3030;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));
}).catch((error) => console.log(`${error} did not connect`));