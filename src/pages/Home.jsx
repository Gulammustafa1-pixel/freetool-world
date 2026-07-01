import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SpotlightCard from "../components/SpotlightCard";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";


import "../App.css";

function Home() {
  return (
    <>
      <Hero />

      <Marquee />

      <section className="tools-section">

        <h2>Choose Your AI Tool</h2>

        <div className="tools-grid">

          <SpotlightCard>

            <Link
              to="/logo-generator"
              className="tool-card"
            >
              <h3>🎨 AI Logo Generator</h3>

              <p>
                Create professional AI logos instantly with
                modern AI models.
              </p>

            </Link>

          </SpotlightCard>

          <SpotlightCard>

            <Link
              to="/image-generator"
              className="tool-card"
            >
              <h3>🖼 AI Image Generator</h3>

              <p>
                Generate stunning AI artwork from simple text
                prompts in seconds.
              </p>

            </Link>

          </SpotlightCard>

        </div>

      </section>

      <Stats />

      

      

    </>
  );
}

export default Home;