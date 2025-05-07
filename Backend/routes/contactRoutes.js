import express from "express";
import { contactForm } from "../controllers/contactController.js";

const Contactrouter = express.Router();

Contactrouter.post("/contact", contactForm);

export default Contactrouter;
