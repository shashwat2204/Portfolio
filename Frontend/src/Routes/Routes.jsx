import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../Pages/Home/LandingPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Authentication/Contact";
import AboutMe from "../Pages/About/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import ProtectedRoute from "../Utils/ProtectedRoute";

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, // base
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/intro",
            element: <LandingPage />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/about",
            element: <AboutMe />,
          },
          {
            path: "/skills",
            element: <Skills />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "*",
            element: <h1 style={{ textAlign: "center", marginTop: "5rem" }}>404 - Page Not Found</h1>,
          },
        ],
      },
    ],
  },
]);
export default PageRoutes;
