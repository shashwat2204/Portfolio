import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Home/LandingPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Authentication/Contact";
import AboutMe from "../Pages/About/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
const PageRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
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
        element: <Skills />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
export default PageRoutes;
