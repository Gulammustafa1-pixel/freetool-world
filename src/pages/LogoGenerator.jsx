import PromptBox from "../components/PromptBox";
import LogoPreview from "../components/LogoPreview";

function LogoGenerator({ logoData, setLogoData }) {
  return (
    <main className="logo-generator-page">

      <section className="seo-content">
        <h1>AI Logo Generator - Create Logos Online Free</h1>

        <p>
          Create professional logos with our free AI Logo Generator.
          Enter your idea or business name and generate unique logo designs
          online using artificial intelligence.
        </p>
      </section>

      <PromptBox
        logoData={logoData}
        setLogoData={setLogoData}
      />

      <LogoPreview
        logoData={logoData}
      />

    </main>
  );
}

export default LogoGenerator;