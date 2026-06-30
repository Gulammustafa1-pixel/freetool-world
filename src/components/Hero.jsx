import "../styles/Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <motion.span
        className="badge"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 100% Free AI Tools Platform
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Create Anything
        <br />
        With Artificial Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Generate AI Logos, AI Images, Blogs, Resumes and many more
        powerful AI tools — all in one place, completely free.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/logo-generator">
          <button className="primary">
            Start Creating
          </button>
        </Link>

        <Link to="/image-generator">
          <button className="secondary">
            AI Image Generator
          </button>
        </Link>
      </motion.div>

    </section>
  );
}

export default Hero;