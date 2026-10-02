import { motion } from "framer-motion";

const AboutMe = () => (
  <section className="profile-section" id="about">
    <div className="section-wrap about-layout">
      <motion.div
        className="about-stamp"
        initial={{ opacity: 0, rotate: -16, scale: 0.92 }}
        whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="stamp-star">✳</span>
        <span>
          COMPUTER SCIENCE
          <br />
          &amp; AI / ML
        </span>
        <small>NOIDA, INDIA · 2026</small>
      </motion.div>
      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <p className="section-label">02 / ABOUT ME</p>
        <h2>Building intelligent, reliable software.</h2>
        <p>
          Hi, I’m Shashwat Sharma, a Computer Science and Engineering graduate
          specialising in AI/ML from Amity University, Noida.
        </p>
        <p>
          I build full-stack applications and AI-powered systems with C#,
          ASP.NET Core, React, Node.js, Python, SQL, and modern AI technologies.
          I enjoy turning ideas into practical products — from backend APIs and
          business applications to RAG systems, LLM-powered tools, and
          intelligent workflows.
        </p>
        <p>
          I’ve gained hands-on software engineering experience at Cognizant,
          working with the .NET ecosystem, REST APIs, databases, and full-stack
          application development. I also have startup experience from The
          Sirius Academy, where I worked on lessons, user profiles, and reusable
          product components.
        </p>
        <p>
          I’m particularly interested in the intersection of software
          engineering and AI — building systems that are intelligent, reliable,
          and useful in the real world. I’m currently expanding my skills in
          cloud deployment, Docker, CI/CD, and production engineering.
        </p>
        <a className="inline-link" href="#resumes">
          Explore my resumes <span>↓</span>
        </a>
        <div className="about-tags">
          <span> ASP.NET / C# <b>|</b> </span>
          <span>FULL STACK <b>|</b> </span>
          <span> REACT / NODE.JS <b>|</b> </span>
          <span> PYTHON <b>|</b> </span>
          <span> GENERATIVE AI <b>|</b> </span>
          <span> RAG SYSTEMS <b>|</b> </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutMe;
