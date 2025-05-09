import express from "express";
import { contactForm } from "../controllers/contactController.js";

const contactRoutes = express.Router();

contactRoutes.post("/", contactForm);

export default contactRoutes;
