import { useState } from "react";
import ImagePromptBox from "../components/ImagePromptBox";
import ImagePreview from "../components/ImagePreview";

function ImageGenerator() {
  const [imageData, setImageData] = useState(null);

  return (
    <main className="image-generator-page">

      {/* SEO Content */}
      <section
        className="image-seo-content"
        aria-labelledby="image-generator-title"
      >
        <h1 id="image-generator-title">
          AI Image Generator - Create Images From Text
        </h1>

        <p>
          Create unique AI images from simple text prompts with
          FreeToolWorld's free AI Image Generator. Turn your ideas into
          creative artwork, illustrations and visuals online.
        </p>
      </section>

      {/* Image Generator */}
      <ImagePromptBox
        setImageData={setImageData}
      />

      <ImagePreview
        imageData={imageData}
      />

    </main>
  );
}

export default ImageGenerator;