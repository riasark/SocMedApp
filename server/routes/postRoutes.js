import express from "express";
import {newPost, doublePost, hobbyFeed, userFeed, like, comment} from "../controllers/post.js"

const router = express.Router();

router.get('/:author')