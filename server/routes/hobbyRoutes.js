import express from "express";
import { hobbyFeed } from "../controllers/post.js";
import { joinHobby } from "../controllers/user.js";

const routes = express.Router();

routes.get("/:hobby", hobbyFeed);
routes.patch("/:author/:hobby", joinHobby);

export default routes;