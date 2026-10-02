import PropTypes from "prop-types";

// Shared project content used by the portfolio's scrolling work showcase.
export const projects = [
  {
    number: "01",
    title: "FIR-Legal Connect",
    type: "AI · LEGAL TECH",
    stack: "Python / Flask / FAISS / Llama 3",
    copy: "An AI-powered legal assistant that uses RAG to retrieve relevant BNS sections and generate contextual responses. DistilBERT helps validate legal queries, while precomputed embeddings keep retrieval fast.",
    tone: "lavender",
    mark: "§",
  },
  {
    number: "02",
    title: "Assessly.AI",
    type: "FULL STACK · EDTECH",
    stack: "React / Node.js / PostgreSQL / LLMs",
    copy: "An intelligent lab-management system that creates personalised questions, automates assessment, and gives faculty and students a clear view of schedules, submissions, and progress.",
    tone: "lime",
    mark: "A+",
  },
  {
    number: "03",
    title: "Supermarket Billing System",
    type: "SYSTEMS · C++",
    stack: "C++ / File Handling",
    copy: "A command-line billing application with dedicated admin and customer flows, inventory CRUD, dynamic invoices, discounts, and persistent product data.",
    tone: "blue",
    mark: "{ }",
  },
];

export const projectPropType = PropTypes.shape({
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  tone: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
});
