import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

export const contactForm = async (req, res) => {
  const { name, email, message } = req.body;

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
      html: `<p><strong>Message:</strong> ${message}</p>
             <p><strong>Sender Email:</strong> ${email}</p>`
    });

    res.status(201).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error('Error sending email:', error); // Always log
    res.status(500).json({ message: error.message });
  }
};
