import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-icon">✦</span>
        <span>FreeTool.world</span>
      </div>

      <nav className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/logo-generator">
          AI Logo
        </Link>

        <Link to="/image-generator">
          AI Image
        </Link>

      </nav>

      <button className="nav-btn">
        Get Started
      </button>

    </header>
  );
}

export default Navbar;