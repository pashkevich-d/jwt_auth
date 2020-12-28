import express from "express";
import verify from "../routes/verifyToken.js";

const router = express.Router();

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "my first post",
      description: "this is really my first one",
    },
  });
});

export default router;
