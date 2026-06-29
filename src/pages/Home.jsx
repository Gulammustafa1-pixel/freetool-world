import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromptBox from "../components/PromptBox";
import LogoPreview from "../components/LogoPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Background from "../components/Background";

function Home({ logoData, setLogoData }) {

  return (
    <>
      <Background />

      <Navbar />

      <Hero />

      <PromptBox
        setLogoData={setLogoData}
      />

      <LogoPreview
        logoData={logoData}
      />

      <Features />

      <Footer />
    </>
  );

}

export default Home;