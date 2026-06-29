import { useState } from "react";
import "../styles/PromptBox.css";
import { generateLogo } from "../api/huggingface";
function PromptBox({ setLogoData }) {

  const [company, setCompany] = useState("");
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Minimal");
  const [color, setColor] = useState("Blue");
  const [loading, setLoading] = useState(false);

const handleGenerate = async () => {

  if (!company || !prompt) {
    alert("Please enter Company Name and Logo Description.");
    return;
  }

  setLoading(true);

  const fullPrompt = `
Company: ${company}
Logo Description: ${prompt}
Style: ${style}
Color: ${color}
`;

const result = await generateLogo(fullPrompt);

if (result?.images?.[0]?.url) {
  setLogoData({
    company,
    prompt,
    style,
    color,
    image: result.images[0].url,
  });
}

setLoading(false);

};
  return (
    <div className="prompt-box">

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <textarea
        placeholder="Describe your logo...
Example: Modern blue lion logo for a tech company."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="controls">

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Minimal</option>
          <option>Modern</option>
          <option>Luxury</option>
          <option>Gaming</option>
          <option>3D</option>
        </select>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option>Blue</option>
          <option>Black</option>
          <option>Gold</option>
          <option>Red</option>
          <option>Green</option>
        </select>

<button
  onClick={handleGenerate}
  disabled={loading}
>
  {loading ? (
    <>
      <span className="spinner"></span>
      Generating...
    </>
  ) : (
    "Generate AI Logo"
  )}
</button>

      </div>

    </div>
  );
}

export default PromptBox;