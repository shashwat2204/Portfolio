import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import "../../Styles/Projects/Projects.css";

const projects = [
  { number: "01", title: "FIR-Legal Connect", stack: "Python / Flask / FAISS / Llama 3", copy: "An AI-powered legal assistant that uses RAG to retrieve relevant BNS sections and generate contextual responses. DistilBERT helps validate legal queries, while precomputed embeddings keep retrieval fast." },
  { number: "02", title: "Assessly.AI", stack: "React / Node.js / PostgreSQL / LLMs", copy: "An intelligent lab-management system that creates personalised questions, automates assessment, and gives faculty and students a clear view of schedules, submissions, and progress." },
  { number: "03", title: "Supermarket Billing System", stack: "C++ / File Handling", copy: "A command-line billing application with dedicated admin and customer flows, inventory CRUD, dynamic invoices, discounts, and persistent product data." },
];

const Projects = () => <><Navbar/><main className="projects-page"><section className="projects-intro"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}><p className="section-kicker">SELECTED WORK</p><h1>Projects built to solve<br/><em>real problems.</em></h1><p>From retrieval-augmented AI to practical full-stack systems, these projects reflect how I approach useful software.</p></motion.div></section><section className="projects-list">{projects.map((project, index) => <motion.article className="project-card" key={project.title} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.12 + index * .12, duration:.45}}><span className="project-number">{project.number}</span><div><p className="project-stack">{project.stack}</p><h2>{project.title}</h2><p className="project-copy">{project.copy}</p></div></motion.article>)}</section></main></>;
export default Projects;
