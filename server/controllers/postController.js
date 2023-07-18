import Post from "../models/Post.js";

//Create a new post

export const createPost = async (req, res) => {
  try {
    const post = new Post({ userId: req.user.id, ...req.body });

    await post.save();
    res.status(200).json({ message: "post created successfully", post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Update a post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user is authorized to update the post
    if (req.user.id !== post.userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this post" });
    }

    // Perform the update and get the updated post data
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Respond with the updated post data
    res.status(200).json(updatedPost);
  } catch (err) {
    // Handle errors and respond with an error message
    res.status(500).json({ message: err.message });
  }
};

//Delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId === req.user.id) {
      await Post.findByIdAndDelete(req.params.id);
      return res.status(200).json({ success: "Deleted Post Successfully" });
    } else {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this post" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get All post
export const getAllpost = async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.user.id });
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
