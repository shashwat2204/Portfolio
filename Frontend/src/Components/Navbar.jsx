import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">SHASHWAT</a>
      </div>
      <ul className="nav-links">
        <li><Link to="/home"> Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><a href="#services">Projects</a></li>
        <li><Link to= "/contact">Contact</Link></li>
        
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
