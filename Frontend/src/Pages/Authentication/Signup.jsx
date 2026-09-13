import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../Styles/Authentication/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const Signup = () => {
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMsg("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/auth/signup`,
        values,
      );
      setMsg(res.data.message || "Signup successful!");
      resetForm();

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="auth-orb auth-orb-one" />
      <div className="auth-orb auth-orb-two" />
      <motion.div className="login-form" initial={{ opacity: 0, y: 25, rotateX: -8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
        <p className="auth-kicker">START YOUR JOURNEY</p>
        <h2>Signup</h2>
        <p className="auth-subtitle">Create an account and explore my work.</p>
        {msg && <p className="message">{msg}</p>}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />

              <label>Password</label>
              <div className="password-field">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Signup"}
              </button>
              <Link to="/" className="link">
                Already have an account? Log in
              </Link>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default Signup;
