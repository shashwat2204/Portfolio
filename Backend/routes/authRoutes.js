import express from "express";
import { signup , login } from "../controllers/authControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { rateLimit } from "../middleware/rateLimiter.js";
const authRoutes = express.Router();
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 });

authRoutes.post("/signup", authLimiter, signup);
authRoutes.post("/login", authLimiter, login);
authRoutes.get("/protected", authenticate, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
  });

export default authRoutes;
