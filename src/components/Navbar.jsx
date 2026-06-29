import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FreeTool.world</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>AI Tools</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;