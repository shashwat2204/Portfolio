import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import "../../Styles/About/AboutMe.css";

const AboutMe = () => (
  <>
    <Navbar />
    <main className="aboutMe">
      <motion.div
        className="aboutMe-box"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="section-kicker">01 / ABOUT ME</div>
        <h1>Building intelligent, reliable software.</h1>
        <div className="about-copy">
          <p>
            Hi, I’m Shashwat Sharma, a Computer Science and Engineering graduate
            specialising in AI/ML from Amity University, Noida.
          </p>
          <p>
            I build full-stack applications and AI-powered systems with C#,
            ASP.NET Core, React, Node.js, Python, SQL, and modern AI
            technologies. I enjoy turning ideas into practical products - from
            backend APIs and business applications to RAG systems, LLM-powered
            tools, and intelligent workflows.
          </p>
          <p>
            I’ve gained hands-on software engineering experience at Cognizant,
            working with the .NET ecosystem, REST APIs, databases, and
            full-stack application development. I also have startup experience
            from The Sirius Academy, where I worked on lessons, user profiles,
            and reusable product components.
          </p>
          <p>
            I’m particularly interested in the intersection of software
            engineering and AI - building systems that are intelligent,
            reliable, and useful in the real world. I’m currently expanding my
            skills in cloud deployment, Docker, CI/CD, and production
            engineering to take the things I build from development to
            production.
          </p>
        </div>
        <div className="about-tags">
          <span>FULL STACK</span>
          <span>GENERATIVE AI</span>
          <span>RAG SYSTEMS</span>
          <span>ASP.NET / C#</span>
          <span>CLOUD & CI/CD</span>
        </div>
      </motion.div>
    </main>
  </>
);
export default AboutMe;
