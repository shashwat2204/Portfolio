import { useRef } from "react";
import Navbar from "../../Components/Navbar";
import "../../Styles/Home/Home.css";
import { Link } from "react-router-dom";
import { BiSolidChevronDownCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const Home = () => {
  const heroRef = useRef(null);
  const handlePointerMove = (event) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    heroRef.current.style.setProperty(
      "--cursor-x",
      `${((event.clientX - rect.left) / rect.width) * 100}%`,
    );
    heroRef.current.style.setProperty(
      "--cursor-y",
      `${((event.clientY - rect.top) / rect.height) * 100}%`,
    );
  };

  return (
    <>
      <Navbar />
      <main className="home-bg" ref={heroRef} onPointerMove={handlePointerMove}>
        <div className="cursor-glow" />
        <div className="hero-stars" aria-hidden="true" />
        <div className="hero-float hero-float-one" aria-hidden="true" />
        <div className="hero-float hero-float-two" aria-hidden="true" />
        <div className="hero-float hero-float-three" aria-hidden="true" />
        <motion.section
          className="welcome"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">FULL-STACK DEVELOPER / AI-ML ENTHUSIAST</p>
          <h1>
            Building thoughtful
            <br />
            <em>digital experiences.</em>
          </h1>
          <p className="hero-copy">
            I’m Shashwat Sharma — a full-stack developer exploring AI systems,
            practical products, and elegant user experiences.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="primary-action">
              View my work <span>↗</span>
            </Link>
            <Link to="/contact" className="text-action">
              Let’s work together
            </Link>
          </div>
        </motion.section>
        <a
          href="/documents/Shashwat-Sharma-Resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          DOWNLOAD RESUME ↓
        </a>
        <Link to="/about" className="scroll-cue" aria-label="View about">
          <span>EXPLORE ABOUT ME</span>
          <BiSolidChevronDownCircle />
        </Link>
      </main>
    </>
  );
};

export default Home;
