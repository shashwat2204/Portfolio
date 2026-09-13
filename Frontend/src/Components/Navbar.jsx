import "../Styles/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsOpen(false);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <Link to="/home" className="logo" onClick={closeMenu}>
        <span>SS</span> SHASHWAT
      </Link>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/home" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <button className="nav-logout" onClick={logout}>
            Log out
          </button>
        </li>
      </ul>
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};
export default Navbar;
