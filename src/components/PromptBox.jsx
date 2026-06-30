import { useState } from "react";
import "../styles/PromptBox.css";
import { generateLogo } from "../api/backend";

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

    try {
      const result = await generateLogo({
        company,
        prompt,
        style,
        color,
      });

      console.log("FULL RESULT:", result);
      console.log("IMAGES:", result?.images);
      console.log("URL:", result?.images?.[0]?.url);

      if (result && result.images && result.images.length > 0) {
        setLogoData({
          company,
          prompt,
          style,
          color,
          image: result.images[0].url,
        });

        console.log("Logo data updated successfully.");
      } else {
        alert("No image received from API.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
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