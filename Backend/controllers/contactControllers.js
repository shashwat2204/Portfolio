import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

export const contactForm = async (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10
  ) {
    return res
      .status(400)
      .json({ message: "Please provide a valid name, email, and message." });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res
      .status(503)
      .json({ message: "Email delivery is not configured." });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio contact <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      subject: `Portfolio Contact From ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Unable to process portfolio contact submission:", error);
    res
      .status(500)
      .json({
        message: "Your message could not be sent. Please try again later.",
      });
  }
};
