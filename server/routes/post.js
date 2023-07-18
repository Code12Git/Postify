import express from "express";
import {
  createPost,
  deletePost,
  getAllpost,
  updatePost,
} from "../controllers/postController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Create a new post
router.post("/", verifyToken, createPost);

// Update a post
router.put("/:id", verifyToken, updatePost);

// Delete a post
router.delete("/:id", verifyToken, deletePost);

//Get All post
router.get("/", verifyToken, getAllpost);

export default router;
