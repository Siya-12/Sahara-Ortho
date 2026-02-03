import express from "express";
import { getMyProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get logged-in user profile
router.get("/me", protect, getMyProfile);

export default router;
