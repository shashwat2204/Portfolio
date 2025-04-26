import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCode } from "react-icons/fa";
import "../../Styles/Skills/Skills.css";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML & CSS", icon: <FaHtml5 /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaCode /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "Redux", icon: <FaCode /> },
  { name: "GraphQL", icon: <FaCode /> },
];

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="skills-page">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <motion.div className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-text">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
