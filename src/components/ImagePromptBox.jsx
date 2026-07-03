import { useState } from "react";
import "../styles/PromptBox.css";
import { generateImage } from "../api/image";

function ImagePromptBox({ setImageData }) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [size, setSize] = useState("1024x1024");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter an image description.");
      return;
    }

    setLoading(true);
    setImageData(null);

    const result = await generateImage({
      prompt,
      style,
      size,
    });

    if (result?.images?.[0]?.url) {
      setImageData({
        prompt,
        style,
        size,
        image: result.images[0].url,
      });
    } else {
      alert("Image generation failed.");
    }

    setLoading(false);
  };

  return (
    <div className="prompt-box">

      <textarea
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="controls">

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option>Realistic</option>
          <option>Anime</option>
          <option>3D</option>
          <option>Digital Art</option>
          <option>Fantasy</option>
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option>1024x1024</option>
          <option>768x768</option>
          <option>512x512</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

      </div>

    </div>
  );
}

export default ImagePromptBox;