import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer"))
    return res.status(401).json({ message: "No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(payload.userId).select("-password");
    if (!req.user) return res.status(401).json({ message: "Invalid token" });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
}

export default authMiddleware;
