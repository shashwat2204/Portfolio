import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Home/LandingPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Authentication/Contact";
import AboutMe from "../Pages/About/AboutMe";
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
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default PageRoutes;
