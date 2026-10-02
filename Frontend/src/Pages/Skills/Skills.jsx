import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaCode,
  FaPython,
  FaJava,
} from "react-icons/fa";

const skills = [
  { name: "C / C++", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C# / .NET", icon: <FaCode /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaCode /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "SQL / PostgreSQL", icon: <FaDatabase /> },
  { name: "RAG & LLMs", icon: <FaCode /> },
];

const Skills = () => (
  <section className="toolkit-section section-wrap" id="skills">
    <motion.div
      className="section-heading skills-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <p className="section-label">03 / MY TOOLKIT</p>
        <h2>Tools for the <em>job.</em></h2>
      </div>
      <p>A growing set of tools I use to take ideas from concept to working software.</p>
    </motion.div>
    <motion.div
      className="portfolio-skill-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="portfolio-skill-item"
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <span className="portfolio-skill-icon">{skill.icon}</span>
          <span className="portfolio-skill-text">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
