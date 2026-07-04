import "../styles/LogoPreview.css";

function ImagePreview({ imageData }) {

  const handleDownload = () => {
    if (!imageData?.image) return;

    window.open(imageData.image, "_blank");
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
                onError={(e) => {
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
              Open Full Image
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