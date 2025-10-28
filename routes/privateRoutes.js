import auth from "../middleware/auth.js";
import express from "express";
const router = express.Router();

router.get("/me", auth, (req, res) => {
  res.json({ user: req.user });
});

export default router;
