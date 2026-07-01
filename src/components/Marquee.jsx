import "../styles/Marquee.css";

function Marquee() {

  const items = [
    "OpenAI",
    "Hugging Face",
    "FLUX",
    "React",
    "Vercel",
    "AI",
    "FreeTool.world",
    "Creative",
  ];

  return (

    <section className="marquee-section">

      <p className="marquee-title">
        Trusted by creators worldwide
      </p>

      <div className="marquee">

        <div className="marquee-track">

          {items.concat(items).map((item, index) => (

            <span key={index}>
              {item}
            </span>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Marquee;