import "../styles/Privacy.css";
import { motion } from "framer-motion";

function Privacy() {
  return (
    <div className="policy-page">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Privacy <span>Policy</span>
      </motion.h1>

      <div className="policy-card">

        <h2>Information We Collect</h2>

        <p>
          FreeTool.world may collect basic information such as your
          name, email address and usage statistics to improve our AI
          tools and services.
        </p>

        <h2>How We Use Information</h2>

        <p>
          We use your information to provide AI services, improve
          website performance, personalize user experience and ensure
          platform security.
        </p>

        <h2>Cookies</h2>

        <p>
          We use cookies to remember preferences, analyze traffic and
          improve website functionality.
        </p>

        <h2>Third Party Services</h2>

        <p>
          Our website may use Google Analytics, Google Ads and other
          trusted third-party services to improve user experience.
        </p>

        <h2>Security</h2>

        <p>
          We use industry-standard security practices to protect your
          information from unauthorized access.
        </p>

        <h2>Contact</h2>

        <p>
          If you have questions regarding this Privacy Policy, contact
          us at support@freetool.world.
        </p>

      </div>

    </div>
  );
}

export default Privacy;