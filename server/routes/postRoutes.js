import express from "express";
import {newPost, doublePost, userFeed, like, comment, deletePost} from "../controllers/post.js"

const router = express.Router();

router.get("/:author", userFeed);

export default router;