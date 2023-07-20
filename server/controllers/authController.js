import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

// Register user
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.findOne({ email: req.body.email });
    if (newUser) {
      return res.status(403).json({ message: "User already registered" });
    } else {
      const { password, ...userData } = req.body;

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = new User({ ...userData, password: hashedPassword });

      await user.save();

      const { password: userPassword, ...others } = user._doc;
      res.status(200).json({ user: others });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(403).json({ message: "User not found" });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Password does not match" });
      }
      const { password: userPassword, ...userData } = user._doc;
      const accessToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );
      res.status(200).json({ userData, accessToken });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
