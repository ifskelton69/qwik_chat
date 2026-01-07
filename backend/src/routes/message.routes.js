import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserForSidebar, getMessages, sendMessages } from '../controller/message.controller.js';

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);
router.post("/send/:id", protectRoute, sendMessages);
router.get("/:id", protectRoute, getMessages);

export default router;
