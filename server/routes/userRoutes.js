import express from "express";
import { userFeed, userHobbyFeed } from "../controllers/post.js";

const routes = express.Router()

routes.get("/:author/feed", userFeed);
routes.get("/:author/hobbies", userHobbyFeed);

export default routes;