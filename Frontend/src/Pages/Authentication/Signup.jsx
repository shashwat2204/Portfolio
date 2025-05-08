import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../Styles/Authentication/Login.css"
import { useNavigate } from "react-router-dom";


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
      const res = await axios.post("http://localhost:5000/api/auth/signup", values);
      setMsg(res.data.message || "Signup successful!");
      resetForm();

      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);

    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signup</h2>
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-btn"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Signup"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
