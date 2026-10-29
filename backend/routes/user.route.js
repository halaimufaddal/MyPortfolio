import express from "express";
import { userMsg } from "../controllers/user.controller.js";

const route = express.Router();

route.post("/userConnect", userMsg);

export default route;