import express from "express";
import { deletePost, newPost, userFeed, userHobbyFeed} from "../controllers/post.js"

const router = express.Router();

// router.get("/:author", userFeed);

router.post("/:author/newpost", newPost);
router.get("/:author/feed", userFeed);
router.get("/:author/hobbies", userHobbyFeed);
router.post("/:author/newpost", newPost);

router.delete("/delete", deletePost);

export default router;