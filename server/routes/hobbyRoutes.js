import express from "express";
import { hobbyFeed } from "../controllers/post.js";

const routes = express.Router();

routes.get("/:hobby", hobbyFeed);

export default routes;