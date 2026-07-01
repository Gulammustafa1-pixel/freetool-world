import "../styles/Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScene from "./HeroScene";

function Hero() {
  return (
    <section className="hero">

      {/* 3D Robot */}
      <HeroScene />

      {/* Left Content */}
      <div className="hero-content">

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ✨ Next Generation AI Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Build Anything
          <br />
          <span>With Artificial Intelligence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Generate Logos, Images, Blogs, Resumes, Thumbnails and dozens
          of powerful AI tools inside one beautiful platform.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/logo-generator">
            <button className="primary">
              Start Creating →
            </button>
          </Link>

          <Link to="/image-generator">
            <button className="secondary">
              Explore AI
            </button>
          </Link>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;