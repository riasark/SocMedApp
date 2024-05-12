import express, { json } from "express";
import cors from 'cors';
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import hobbyRoutes from "./routes/hobbyRoutes.js"
import loginRoute from "./routes/loginRoute.js"

const app = express();
app.use(json());
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/hobbies', hobbyRoutes);
app.use('/login', loginRoute);

export default app;