import express from "express";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.use(express.json());

app.use("/api/user", authRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server Up and running"));
