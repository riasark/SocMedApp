import express from "express";
import { userFeed, hobbyFeed} from "../controllers/post.js"

const router = express.Router();

router.get("/:author", userFeed);
router.get("/:author/hobbies", hobbyFeed);

export default router;