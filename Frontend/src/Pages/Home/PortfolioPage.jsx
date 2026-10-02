import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import PropTypes from "prop-types";
import AboutMe from "../About/AboutMe";
import { projectPropType, projects } from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Intro from "./Intro";
import "../../Styles/Home/PortfolioPage.css";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      className="reading-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

function ScrollStatement() {
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 82%", "end 40%"],
  });
  const words =
    "I like the part where a vague problem becomes a useful thing someone can rely on.".split(
      " ",
    );
  return (
    <section className="statement-section" id="scroll-note" ref={statementRef}>
      <div className="statement-inner">
        <p className="section-label">[ HOW I LIKE TO WORK ]</p>
        <p className="statement-copy">
          {words.map((word, index) => (
            <StatementWord
              key={`${word}-${index}`}
              word={word}
              index={index}
              count={words.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
        <p className="statement-foot">
          START WITH THE PROBLEM. STAY FOR THE DETAILS.
        </p>
      </div>
    </section>
  );
}

function StatementWord({ word, index, count, progress }) {
  const start = index / count;
  const end = Math.min(1, (index + 1.7) / count);
  const opacity = useTransform(progress, [start, end], [0.17, 1]);
  return (
    <motion.span className="statement-word" style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}
StatementWord.propTypes = {
  word: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  progress: PropTypes.object.isRequired,
};

function ProjectPreview({ project }) {
  if (project.number === "01")
    return (
      <div className="preview-window legal-preview">
        <div className="preview-bar">
          <span>◉ &nbsp; FIR LEGAL CONNECT</span>
          <span>AI RESEARCH ASSISTANT</span>
        </div>
        <div className="legal-preview-body">
          <div className="preview-side">
            <b>FIR</b>
            <span>New research</span>
            <span>Saved sections</span>
            <span>History</span>
          </div>
          <div className="legal-chat">
            <small>QUERY · CRIMINAL LAW</small>
            <p>Ask a question about a legal issue.</p>
            <div className="legal-answer">
              <b>Relevant BNS references</b>
              <span>Contextual response with source links</span>
              <span>Related sections for further reading</span>
              <i>Retrieved from indexed legal references</i>
            </div>
            <span className="preview-input">
              Ask a legal question… <b>↑</b>
            </span>
          </div>
        </div>
      </div>
    );
  if (project.number === "02")
    return (
      <div className="preview-window assessly-preview">
        <div className="preview-bar">
          <span>◉ &nbsp; ASSESSLY</span>
          <span>STUDENT VIEW</span>
        </div>
        <div className="assessly-preview-body">
          <aside>
            <b>Workspace</b>
            <span>Overview</span>
            <span>My labs</span>
            <span>Submissions</span>
          </aside>
          <div className="dashboard-content">
            <small>YOUR LEARNING SPACE</small>
            <h4>Lab progress</h4>
            <div className="dashboard-stats">
              <div>
                <small>SUBMISSIONS</small>
                <b>
                  Track <i>progress</i>
                </b>
              </div>
              <div>
                <small>ASSESSMENTS</small>
                <b>
                  View <i>results</i>
                </b>
              </div>
            </div>
            <div className="dashboard-chart">
              <span>LAB SCHEDULE</span>
              <div className="chart-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="preview-window terminal-preview">
      <div className="preview-bar">
        <span>● &nbsp; SUPERMARKET BILLING</span>
        <span>ADMIN / INVENTORY</span>
      </div>
      <div className="terminal-body">
        <p>
          <i>shashwat@billing</i>:~$ ./store --new-invoice
        </p>
        <span>================================</span>
        <b> NEW INVOICE</b>
        <span>================================</span>
        <div>
          <span>Product × quantity</span>
          <span>Amount</span>
        </div>
        <div>
          <span>Inventory item</span>
          <span>₹ --</span>
        </div>
        <div>
          <span>Inventory item</span>
          <span>₹ --</span>
        </div>
        <span>--------------------------------</span>
        <div>
          <b>Discount</b>
          <b>Applied</b>
        </div>
        <div className="terminal-total">
          <b>TOTAL</b>
          <b>₹ --</b>
        </div>
        <p>
          <i>Invoice ready to save</i>
          <span className="terminal-cursor">_</span>
        </p>
      </div>
    </div>
  );
}

function ProjectScrollStory() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActiveIndex(
      Math.min(projects.length - 1, Math.floor(value * projects.length)),
    );
  });

  return (
    <div className="work-scroll-story" ref={scrollRef}>
      <div className="work-sticky-stage">
        <div className="work-stage-rail">
          <span>SCROLL TO EXPLORE</span>
          <div className="stage-progress">
            <i
              style={{
                transform: `scaleY(${(activeIndex + 1) / projects.length})`,
              }}
            />
          </div>
          <span>
            0{activeIndex + 1} <b>/ 0{projects.length}</b>
          </span>
        </div>
        <div className="work-slides-window">
          <motion.div className="work-slides-track" style={{ x: trackX }}>
            {projects.map((project, index) => (
              <article
                className={`work-slide ${project.tone}`}
                key={project.number}
              >
                <div className="work-slide-copy">
                  <p className="work-stack">
                    {project.number} / {project.type}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <span className="slide-tech">
                    {project.stack.split(" / ").map((item) => (
                      <i key={item}>{item}</i>
                    ))}
                  </span>
                  <span className="slide-count">
                    0{index + 1} — 0{projects.length}
                  </span>
                </div>
                <div className="work-slide-visual">
                  <ProjectPreview project={project} />
                  <span className="preview-caption">
                    INTERFACE STUDY &nbsp;·&nbsp;{" "}
                    {index === 0
                      ? "RETRIEVE · VALIDATE · RESPOND"
                      : index === 1
                        ? "A CLEARER VIEW OF EVERY LAB"
                        : "SMALL SYSTEM. REAL-WORLD LOGIC."}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

ProjectPreview.propTypes = { project: projectPropType.isRequired };

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [sending, setSending] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [
    ["Work", "work"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];
  const sendMessage = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    setSending(true);
    setContactStatus("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setContactStatus("Thanks — your message is on its way.");
    } catch {
      setContactStatus(
        "Sorry, that didn’t go through. Please try again in a moment.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="portfolio-nav">
        <a className="portfolio-brand" href="#top" onClick={closeMenu}>
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
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href="/blog" onClick={closeMenu}>
            Blog
          </a>
          <a className="nav-resume" href="#resumes" onClick={closeMenu}>
            RESUMES ↓
          </a>
        </nav>
      </header>

      <main id="top">
        <Intro />
        <ScrollStatement />

        <section className="work-section section-wrap" id="work">
          <motion.div
            className="section-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div>
              <p className="section-label">01 / SELECTED WORK</p>
              <h2>
                Ideas, made <em>real.</em>
              </h2>
            </div>
            <p>
              A few things I’ve built to make complex problems feel simpler.
            </p>
          </motion.div>
          <ProjectScrollStory />
        </section>

        <AboutMe />
        <Skills />
        <div className="section-wrap experience-strip">
          <span>RECENT EXPERIENCE</span>
          <strong>Cognizant</strong>
          <i>Software engineering · .NET · APIs · Databases</i>
          <strong>The Sirius Academy</strong>
          <i>Product development · Reusable UI</i>
        </div>

        <section className="resume-section section-wrap" id="resumes">
          <motion.div
            className="section-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="section-label">04 / TAKE A CLOSER LOOK</p>
              <h2>
                Two paths. One <em>curious mind.</em>
              </h2>
            </div>
            <p>
              Choose the version that best matches the role you’re hiring for.
            </p>
          </motion.div>
          <div className="resume-grid">
            <motion.a
              className="resume-card resume-developer"
              href="/documents/Shashwat-Sharma-Developer-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="resume-card-index">
                01 / SOFTWARE ENGINEERING
              </span>
              <span className="resume-card-mark">{"{ }"}</span>
              <strong>Developer</strong>
              <span className="resume-card-detail">
                Full-stack · .NET · React · Backend
              </span>
              <span className="resume-card-action">
                VIEW RESUME <b>↗</b>
              </span>
            </motion.a>
            <motion.a
              className="resume-card resume-ai"
              href="/documents/Shashwat-Sharma-AI-Engineer-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <span className="resume-card-index">
                02 / AI & MACHINE LEARNING
              </span>
              <span className="resume-card-mark">✳</span>
              <strong>AI Engineer</strong>
              <span className="resume-card-detail">
                LLMs · RAG · NLP · Python
              </span>
              <span className="resume-card-action">
                VIEW RESUME <b>↗</b>
              </span>
            </motion.a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <motion.div
            className="section-wrap contact-content"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="section-label">05 / WHAT’S NEXT?</p>
            <h2>
              Have a good one
              <br />
              in <em>mind?</em>
            </h2>
            <p>
              I’m always up for a thoughtful conversation about software, AI,
              and ideas worth building.
            </p>
            <form className="portfolio-contact-form" onSubmit={sendMessage}>
              <div className="contact-fields">
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    placeholder="How should I address you?"
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Your message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={3}
                  placeholder="Tell me a little about it…"
                />
              </label>
              <button
                className="button-primary contact-button"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send a message"}
                <span>↗</span>
              </button>
              {contactStatus && (
                <p className="contact-status" role="status">
                  {contactStatus}
                </p>
              )}
            </form>
            <span className="contact-footnote">
              OPEN TO NEW OPPORTUNITIES · NOIDA, INDIA
            </span>
          </motion.div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <a className="portfolio-brand" href="#top">
          <span>SS</span> SHASHWAT SHARMA
        </a>
        <span>BUILT WITH CURIOSITY · © 2026</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
      <a className="sticky-contact" href="#contact">
        <span className="sticky-contact-dot" /> LET’S TALK <b>↗</b>
      </a>
      <ReadingProgress />
    </div>
  );
}

export default PortfolioPage;
