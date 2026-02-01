import express from "express";
import { firebaseLogin } from "../controllers/authController.js";

const router = express.Router();

// Firebase login (Google / Phone)
router.post("/login", firebaseLogin);

export default router;