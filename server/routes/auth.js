import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

//Create a user
router.post("/register", registerUser);

//Login user
router.post("/login", loginUser);

export default router;
