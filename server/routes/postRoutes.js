import express from "express";
import { comment, deletePost, like, newPost, unlike, userFeed, userHobbyFeed} from "../controllers/post.js"

const router = express.Router();

// router.get("/:author", userFeed);

router.post("/:author/newpost", newPost);
router.get("/:author/feed", userFeed);
router.get("/:author/hobbies", userHobbyFeed);
router.post("/:author/newpost", newPost);

router.delete("/delete", deletePost);

router.post("/comment", comment);
router.get("/:id/like", like);
router.get("/:id/unlike", unlike);

export default router;