import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
// import { Navbar } from "../../Components/Navbar"
import "../../Styles/About/Contact.css";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .min(10, "Message too short")
      .required("Message is required"),
  });

  const sendEmail = async (values, { resetForm }) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        values,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully!");
      resetForm(); // Reset form after successful submission
    } catch (error) {
      toast.error("Failed to send message. Try again!");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="contact-container">
        <div className="contact-box">
          <h2 className="contact-title">Contact Me</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form className="contact-form">
                <label htmlFor="name">Your Name</label>
                <Field type="text" name="name" className="contact-input" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="contact-error"
                />

                <label htmlFor="email">Your Email</label>
                <Field type="email" name="email" className="contact-input" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="contact-error"
                />

                <label htmlFor="message">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className="contact-textarea"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="contact-error"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-button"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
