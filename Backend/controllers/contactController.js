import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
}[character]));

export const contactForm = async (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim().toLowerCase();
  const message = req.body.message?.trim();

  if (!name || name.length < 2 || name.length > 100 || !email || !/^\S+@\S+\.\S+$/.test(email) || !message || message.length < 10 || message.length > 3000) {
    return res.status(400).json({ message: "Please provide a valid name, email, and message." });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,  
      to: process.env.EMAIL_USER,    
      replyTo: email,                
      subject: `Portfolio Contact Form from ${name}`,
      html: `<p><strong>Message:</strong> ${escapeHtml(message)}</p>
             <p><strong>Sender Email:</strong> ${escapeHtml(email)}</p>`
    });

    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error('Error sending email:', error); // Always log
    res.status(500).json({ message: error.message });
  }
};
