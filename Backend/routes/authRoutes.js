import express from "express";
import { signup , login } from "../controllers/authControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";
const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/protected", authenticate, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
  });

export default authRoutes;
