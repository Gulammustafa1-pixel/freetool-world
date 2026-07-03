import "../styles/LogoPreview.css";

function ImagePreview({ imageData }) {

  const handleDownload = async () => {
    try {
      const response = await fetch(imageData.image);

      if (!response.ok) {
        throw new Error("Image download failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "AI-Image.png";

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error(err);
      alert("Download failed");
    }
  };

  return (
    <section className="preview">

      <h2>Image Preview</h2>

      <div className="preview-card">

        {imageData ? (
          <>
            <div className="logo-image">

              <img
  key={imageData.image}
  src={imageData.image}
  alt="Generated"
  loading="eager"
  referrerPolicy="no-referrer"
  onError={(e) => {
    console.log("Retry Image");

    setTimeout(() => {
      e.target.src =
        imageData.image +
        (imageData.image.includes("?") ? "&" : "?") +
        "retry=" +
        Date.now();
    }, 2000);
  }}
              />

            </div>

            <p>{imageData.prompt}</p>

            <p>
              <strong>Style:</strong> {imageData.style}
            </p>

            <p>
              <strong>Size:</strong> {imageData.size}
            </p>

            <button
              className="download-btn"
              onClick={handleDownload}
            >
              Download Image
            </button>

          </>
        ) : (
          <>
            <div className="logo-image">
              <p>🖼</p>
            </div>

            <p>No image generated yet.</p>
          </>
        )}

      </div>

    </section>
  );
}

export default ImagePreview;