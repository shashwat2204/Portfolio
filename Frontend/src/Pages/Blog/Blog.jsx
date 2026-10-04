import { useState } from "react";
import { motion } from "framer-motion";
import "../../Styles/Blog/Blog.css";

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell blog-shell">
      <header className="portfolio-nav">
        <a className="portfolio-brand" href="/#top" onClick={closeMenu}>
          <span>SS</span> SHASHWAT SHARMA
        </a>
        <button
          className="portfolio-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
        <nav
          className={
            menuOpen ? "portfolio-nav-links is-open" : "portfolio-nav-links"
          }
          aria-label="Main navigation"
        >
          <a href="/#work" onClick={closeMenu}>
            Work
          </a>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-resume" href="/#resumes" onClick={closeMenu}>
            RESUMES ↓
          </a>
        </nav>
      </header>

      <main className="blog-page">
        <div className="blog-topline">
          <a href="/" className="blog-back">
            ← BACK TO PORTFOLIO
          </a>
          <span>FIELD NOTES · VOL. 01</span>
        </div>
        <motion.section
          className="blog-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-label">THINKING OUT LOUD</p>
          <h1>
            Notes from
            <br />
            the <em>build.</em>
          </h1>
          <p className="blog-intro">
            Ideas, experiments, and lessons from making software — especially
            where full-stack engineering meets practical AI.
          </p>
        </motion.section>

        <motion.section
          className="blog-feature"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          aria-label="Blog coming soon"
        >
          <div className="blog-feature-art" aria-hidden="true">
            <span>✳</span>
            <i />
            <i />
            <i />
          </div>
          <div className="blog-feature-copy">
            <p className="section-label">THE NOTEBOOK IS OPENING</p>
            <h2>
              Good things take
              <br />
              <em>a first draft.</em>
            </h2>
            <p>
              I’m putting together practical notes on the things I’m learning
              and building. The first article is in progress; check back soon.
            </p>
            <div className="blog-tags">
              <span>FULL-STACK</span>
              <span>AI / RAG</span>
              <span>BUILD NOTES</span>
            </div>
          </div>
          <span className="blog-feature-index">01 / SOON</span>
        </motion.section>

        <section className="blog-bottom">
          <p>Have a topic you’d like me to write about?</p>
          <a href="/#contact">
            Suggest an idea <span>↗</span>
          </a>
        </section>
      </main>
      <footer className="portfolio-footer">
        <a className="portfolio-brand" href="/#top">
          <span>SS</span> SHASHWAT SHARMA
        </a>
        <span>BUILT WITH CURIOSITY · © 2026</span>
        <a href="/#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
};

export default Blog;
