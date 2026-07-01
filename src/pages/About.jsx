import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          About <span>FreeTool.world</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
        >
          FreeTool.world is an all-in-one AI platform designed to help
          creators, businesses, students and professionals generate
          stunning AI content within seconds.
        </motion.p>

      </section>

      <section className="about-grid">

        <div className="about-card">

          <h2>🚀 Our Mission</h2>

          <p>
            Our mission is to make Artificial Intelligence accessible
            for everyone by providing fast, reliable and beautiful AI
            tools in one platform.
          </p>

        </div>

        <div className="about-card">

          <h2>⚡ Why Choose Us?</h2>

          <ul>

            <li>AI Logo Generator</li>

            <li>AI Image Generator</li>

            <li>Fast Performance</li>

            <li>Modern UI</li>

            <li>Secure Experience</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>🌍 Our Vision</h2>

          <p>
            We believe AI should be simple, powerful and available to
            everyone. FreeTool.world is continuously expanding with
            new AI tools every month.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;