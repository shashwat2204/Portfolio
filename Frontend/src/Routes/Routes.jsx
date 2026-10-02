import { createBrowserRouter, Navigate } from "react-router-dom";
import PortfolioPage from "../Pages/Home/PortfolioPage";
import Blog from "../Pages/Blog/Blog";

const PageRoutes = createBrowserRouter([
  { path: "/", element: <PortfolioPage /> },
  { path: "/blog", element: <Blog /> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default PageRoutes;
