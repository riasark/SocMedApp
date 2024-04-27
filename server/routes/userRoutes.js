import express from "express";
// import { userFeed, userHobbyFeed } from "../controllers/post.js";
import { signup, userHobbies } from "../controllers/user.js"
import { userHobbyFeed } from "../controllers/post.js";
import { userprof } from "../controllers/user.js";
import { userFeed } from "../controllers/post.js";

const routes = express.Router()

routes.get("/:author/feed", userFeed);
routes.get("/:user/specific", userprof)
routes.get("/:author/hobbyfeed", userHobbyFeed);
routes.get("/:user", userHobbies);

routes.post("/newuser", signup);

export default routes;