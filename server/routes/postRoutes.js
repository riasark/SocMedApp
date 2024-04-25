import express from "express";
import { userFeed, userHobbyFeed} from "../controllers/post.js"

const router = express.Router();

// router.get("/:author", userFeed);

router.get("/:author/feed", userFeed);
router.get("/:author/hobbies", userHobbyFeed);

export default router;