import { motion } from "framer-motion";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Navbar from "../../Components/Navbar";
import "../../Styles/Blog/Blog.css";

const Blog = () => (
  <>
    <Navbar />
    <main className="blog-page">
      <motion.section
        className="blog-empty"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-kicker">NOTES &amp; IDEAS</p>
        <h1>Writing is<br /><em>coming soon.</em></h1>
        <p className="blog-copy">
          This will be a home for notes on full-stack engineering, AI systems,
          deployment, and the lessons I learn while building.
        </p>
        <div className="blog-placeholder">
          <HiOutlinePencilSquare />
          <div>
            <strong>First post in progress</strong>
            <span>Check back soon for practical engineering notes.</span>
          </div>
        </div>
      </motion.section>
    </main>
  </>
);

export default Blog;
