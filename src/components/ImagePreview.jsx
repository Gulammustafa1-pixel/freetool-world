import "../styles/LogoPreview.css";

function ImagePreview({ imageData }) {

  const handleDownload = async () => {
    try {
      const response = await fetch(imageData.image);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "AI-Image.jpg";

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
                src={imageData.image}
                alt="Generated"
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