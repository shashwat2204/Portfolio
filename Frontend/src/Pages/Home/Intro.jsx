import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

function Intro() {
  const introRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 0.7, 1], ["0vh", "0vh", "-85vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.62, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const previewY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const previewRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section className="welcome-runway" ref={introRef} aria-label="Welcome">
      <motion.div
        className="welcome-stage portfolio-hero"
        style={{
          y: prefersReducedMotion ? 0 : y,
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : scale,
        }}
      >
        <div className="hero-grid" aria-hidden="true" />
        <motion.div
          className="hero-work-preview"
          style={{
            y: prefersReducedMotion ? 0 : previewY,
            rotate: prefersReducedMotion ? 0 : previewRotate,
          }}
          aria-label="Previews of FIR Legal Connect and Assessly AI"
        >
          <div className="hero-project-card hero-project-card-back">
            <div className="hero-project-top"><span>02 / EDUCATION TECH</span><b>ASSESSLY.AI</b></div>
            <div className="hero-dashboard">
              <aside><i />OVERVIEW<i />MY LABS<i />SUBMISSIONS</aside>
              <div className="hero-dashboard-main">
                <small>STUDENT WORKSPACE</small><strong>Lab progress</strong>
                <div className="hero-metrics"><span><small>LABS</small><b>08</b></span><span><small>ON TRACK</small><b>92%</b></span></div>
                <div className="hero-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div>
              </div>
            </div>
            <div className="hero-project-foot"><span>REACT · NODE · AI</span><b>↗</b></div>
          </div>
          <div className="hero-project-card hero-project-card-front">
            <div className="hero-project-top"><span>01 / LEGAL TECHNOLOGY</span><b>FIR LEGAL CONNECT</b></div>
            <div className="hero-legal-content">
              <span className="hero-legal-mark">§</span>
              <small>RESEARCH ASSISTANT · INDIA</small>
              <p>Find the right legal reference.<br/><em>Understand the context.</em></p>
              <div className="hero-legal-result"><b>Relevant BNS sections</b><span>Grounded answers with linked sources</span><i>RETRIEVAL COMPLETE&nbsp; ✓</i></div>
            </div>
            <div className="hero-project-foot"><span>PYTHON · RAG · LLAMA 3</span><b>↗</b></div>
          </div>
          <span className="hero-preview-caption">SELECTED WORK&nbsp; / &nbsp;PRODUCT INTERFACES</span>
        </motion.div>
        <motion.div
          className="hero-content"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="portfolio-kicker">
            <span className="status-dot" />
            A SOFTWARE ENGINEER’S NOTEBOOK
          </p>
          <h1 className="welcome-title">
            Hello, I’m<br />
            <em>Shashwat.</em>
          </h1>
          <p className="hero-description">
            I build software around real workflows — from finding useful legal
            information to helping students make sense of their lab work.
          </p>
          <div className="hero-ctas">
            <a className="button-primary" href="#work">
              Come see what I’ve built <span>↘</span>
            </a>
            <a className="button-quiet" href="#resumes">
              Pick a resume <span>↗</span>
            </a>
          </div>
        </motion.div>
        <a className="hero-scroll" href="#scroll-note">
          <span>SCROLL TO STEP INSIDE</span><b>↓</b>
        </a>
        <span className="hero-index">SHASHWAT SHARMA · 2026</span>
      </motion.div>
    </section>
  );
}

export default Intro;
