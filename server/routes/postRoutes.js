import express from "express";
import { userFeed, userHobbyFeed, newPost} from "../controllers/post.js"

const router = express.Router();

// router.get("/:author", userFeed);

router.get("/:author/feed", userFeed);
router.get("/:author/hobbies", userHobbyFeed);
router.post("/:author/newpost", newPost);

export default router;