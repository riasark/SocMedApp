import express from "express";
import { userHobbyFeed } from "../controllers/post.js";
import { userHobbies } from "../controllers/user.js"
import { userprof } from "../controllers/user.js";

const routes = express.Router()

routes.get("/:user/specific", userprof)
routes.get("/:author/hobbyfeed", userHobbyFeed);
routes.get("/:user", userHobbies);

export default routes;