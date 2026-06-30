import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        FreeTool.world
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/logo-generator">
            AI Logo Generator
          </Link>
        </li>

        <li>
          <Link to="/image-generator">
            AI Image Generator
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;