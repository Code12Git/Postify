import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//Create a user
router.post("/register", registerUser);

//Login user
router.post("/login", loginUser);

//Logout user
router.post("/logout", logoutUser);

export default router;
