import { motion } from "framer-motion";

const revealText = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.12 },
  transition: {
    duration: 0.62,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const AboutMe = () => (
  <section className="profile-section" id="about">
    <div className="section-wrap about-layout">
      <div className="about-visual">
        <div className="about-portrait-stage">
          <span className="portrait-halo" aria-hidden="true" />
          <img
            className="about-portrait"
            src="/images/shashwat-portrait-illustration.png"
            alt="Illustrated portrait of Shashwat Sharma"
          />
          <span className="portrait-signature">SHASHWAT SHARMA · SOFTWARE ENGINEER</span>
        </div>
        <span className="about-visual-caption">A LITTLE ABOUT THE BUILDER</span>
      </div>

      <div className="about-copy">
        <motion.p className="section-label" {...revealText()}>
          02 / ABOUT ME
        </motion.p>
        <motion.h2 {...revealText(0.04)}>
          Building intelligent,<br />
          <em>reliable software.</em>
        </motion.h2>
        <motion.p className="about-lead" {...revealText(0.07)}>
          Hi, I’m Shashwat Sharma, a Computer Science and Engineering graduate
          specialising in AI/ML from Amity University, Noida.
        </motion.p>
        <motion.p {...revealText(0.1)}>
          I build full-stack applications and AI-powered systems with C#,
          ASP.NET Core, React, Node.js, Python, SQL, and modern AI technologies.
          I enjoy turning ideas into practical products — from backend APIs and
          business applications to RAG systems, LLM-powered tools, and
          intelligent workflows.
        </motion.p>
        <motion.p {...revealText(0.1)}>
          I’ve gained hands-on software engineering experience at Cognizant,
          working with the .NET ecosystem, REST APIs, databases, and full-stack
          application development. I also have startup experience from The
          Sirius Academy, where I worked on lessons, user profiles, and reusable
          product components.
        </motion.p>
        <motion.p {...revealText(0.1)}>
          I’m particularly interested in the intersection of software
          engineering and AI — building systems that are intelligent, reliable,
          and useful in the real world. I’m currently expanding my skills in
          cloud deployment, Docker, CI/CD, and production engineering.
        </motion.p>
        <motion.a className="inline-link" href="#resumes" {...revealText(0.06)}>
          Explore my resumes <span>↓</span>
        </motion.a>
        <motion.div className="about-tags" {...revealText(0.08)}>
          <span> ASP.NET / C# <b>|</b> </span>
          <span>FULL STACK <b>|</b> </span>
          <span> REACT / NODE.JS <b>|</b> </span>
          <span> PYTHON <b>|</b> </span>
          <span> GENERATIVE AI <b>|</b> </span>
          <span> RAG SYSTEMS <b>|</b> </span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;
