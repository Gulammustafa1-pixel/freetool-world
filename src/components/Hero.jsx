import "../styles/Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <motion.span
        className="badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 AI Powered Logo Generator
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Create Stunning Logos
        <br />
        with Artificial Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Turn your ideas into beautiful professional logos in seconds.
        No design skills required.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button className="primary">
          Generate Logo
        </button>

        <button className="secondary">
          Explore Tools
        </button>
      </motion.div>

    </section>
  );
}

export default Hero;