import "../styles/Terms.css";
import { motion } from "framer-motion";

function Terms() {
  return (
    <div className="policy-page">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Terms & <span>Conditions</span>
      </motion.h1>

      <div className="policy-card">

        <h2>Acceptance of Terms</h2>

        <p>
          By using FreeTool.world, you agree to comply with these
          Terms and Conditions.
        </p>

        <h2>Use of Services</h2>

        <p>
          Our AI tools are provided for personal and commercial use.
          Users must not misuse or abuse our platform.
        </p>

        <h2>User Responsibilities</h2>

        <p>
          Users are responsible for the content they generate and must
          ensure it complies with applicable laws.
        </p>

        <h2>Intellectual Property</h2>

        <p>
          All website content, branding and software belong to
          FreeTool.world unless otherwise stated.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          FreeTool.world is not responsible for any direct or indirect
          damages resulting from the use of our services.
        </p>

        <h2>Changes to Terms</h2>

        <p>
          We may update these Terms at any time. Continued use of the
          website means you accept any updates.
        </p>

      </div>

    </div>
  );
}

export default Terms;