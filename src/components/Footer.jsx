import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>FreeTool.world</h2>

          <p>
            Powerful AI tools for creators, developers,
            students and businesses.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h4>Products</h4>

            <Link to="/logo-generator">AI Logo Generator</Link>

            <Link to="/image-generator">AI Image Generator</Link>

            <Link to="/resume-generator">AI Resume Builder</Link>

          </div>

          <div>

            <h4>Company</h4>

            <Link to="/about">About</Link>

            <Link to="/blog">Blog</Link>

            <Link to="/contact">Contact</Link>

          </div>

          <div>

            <h4>Legal</h4>

            <Link to="/privacy-policy">Privacy</Link>

            <Link to="/terms">Terms</Link>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 FreeTool.world

      </div>

    </footer>
  );
}

export default Footer;