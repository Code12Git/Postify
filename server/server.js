import express from "express";
import dotenv from "dotenv";
import connection from "./db/conn.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";

//Fetching dotenv file
dotenv.config({ path: "./config.env" });

//App router
const app = express();

//Assigning port
const PORT = process.env.PORT || 3000;

//Database
connection();

//Middlewares

app.use(cookieParser());
app.use(
  cors({
    origin:
      "https://64b651c7b7e43446785a3589--aquamarine-meerkat-4a2492.netlify.app",
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

//Test route
app.get("/", (req, res) => {
  res.send("Test Route");
});

//Listening Port
app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});
