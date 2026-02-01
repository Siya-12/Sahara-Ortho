import express from "express";
import { testAuth } from "../controllers/authController.js";

const router = express.Router();

router.get("/test", testAuth);

export default router;
