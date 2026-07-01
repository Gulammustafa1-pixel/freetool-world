import PromptBox from "../components/PromptBox";
import LogoPreview from "../components/LogoPreview";

function LogoGenerator({ logoData, setLogoData }) {
  return (
    <>
      <PromptBox
        setLogoData={setLogoData}
      />

      <LogoPreview
        logoData={logoData}
      />
    </>
  );
}

export default LogoGenerator;