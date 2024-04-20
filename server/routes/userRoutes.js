import express from "express";
import { userFeed } from "../controllers/post.js";

const routes = express.Router()

routes.get("/:author/feed", userFeed);

export default routes;