import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../App.css";

function Home() {
  return (
    <>
      <Hero />

      <section className="tools-section">

        <h2>Choose Your AI Tool</h2>

        <div className="tools-grid">

          <Link
            to="/logo-generator"
            className="tool-card"
          >
            <h3>🎨 AI Logo Generator</h3>

            <p>
              Create professional AI logos instantly.
            </p>
          </Link>

          <Link
            to="/image-generator"
            className="tool-card"
          >
            <h3>🖼 AI Image Generator</h3>

            <p>
              Generate stunning AI images from text.
            </p>
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;