import express from "express";
import { hobbyFeed } from "../controllers/post.js";
import { joinHobby } from "../controllers/user.js";
import { hobbyId, hobbyInfo } from "../controllers/hobbies.js";

const routes = express.Router();

routes.get("/:hobbyId/info", hobbyInfo);
routes.get("/:hobby", hobbyFeed);
routes.patch("/:author/:hobby", joinHobby);
routes.post("/getId", hobbyId);

export default routes;