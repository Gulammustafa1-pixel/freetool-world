import { useState } from "react";
import ImagePromptBox from "../components/ImagePromptBox";
import ImagePreview from "../components/ImagePreview";

function ImageGenerator() {
  const [imageData, setImageData] = useState(null);

  return (
    <>
      <section
        style={{
          paddingTop: "120px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>AI Image Generator</h1>

        <p>Create amazing AI images from text.</p>
      </section>

      <ImagePromptBox
        setImageData={setImageData}
      />

      <ImagePreview
        imageData={imageData}
      />
    </>
  );
}

export default ImageGenerator;