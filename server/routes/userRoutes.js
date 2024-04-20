import express from "express";
import { userFeed, userHobbyFeed } from "../controllers/post.js";
import { userHobbies } from "../controllers/user.js"

const routes = express.Router()

routes.get("/:author/feed", userFeed);
routes.get("/:author/hobbyfeed", userHobbyFeed);
routes.get("/:user", userHobbies);

export default routes;