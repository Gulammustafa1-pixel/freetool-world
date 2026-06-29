import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <span className="badge">
        🚀 AI Powered Logo Generator
      </span>

      <h1>
        Create Stunning Logos
        <br />
        with Artificial Intelligence
      </h1>

      <p>
        Turn your ideas into beautiful professional logos in seconds.
        No design skills required.
      </p>

      <div className="hero-buttons">
        <button className="primary">
          Generate Logo
        </button>

        <button className="secondary">
          Explore Tools
        </button>
      </div>

    </section>
  );
}

export default Hero;