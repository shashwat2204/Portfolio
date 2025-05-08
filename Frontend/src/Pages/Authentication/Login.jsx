import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import "../../Styles/Authentication/Login.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Login = () => {
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    setMsg("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      setMsg("Login successful!");
      console.log("User:", user);

      setTimeout(() => {
        navigate("/");
      }, 900);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }

    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaRegEye />: <FaRegEyeSlash /> }
                </span>
              </div>
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <Link to="/signup" className="link"> Dont have an account? click here</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
