import express from "express";
import { contactForm } from "../controllers/contactController.js";
import { rateLimit } from "../middleware/rateLimiter.js";

const contactRoutes = express.Router();

contactRoutes.post("/", rateLimit({ windowMs: 60 * 60 * 1000, max: 5 }), contactForm);

export default contactRoutes;
