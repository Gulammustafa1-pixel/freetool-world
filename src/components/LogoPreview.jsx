import "../styles/LogoPreview.css";

function LogoPreview({ logoData }) {

  const handleDownload = async () => {
    try {
      const response = await fetch(logoData.image);

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = `${logoData.company || "logo"}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);

    } catch (error) {
      console.error(error);
      alert("Download failed.");
    }
  };

  return (
    <section className="preview">
      <h2>Logo Preview</h2>

      <div className="preview-card">
        {logoData ? (
          <>
            <div className="logo-image">
              <img
                src={logoData.image}
                alt="Generated Logo"
              />
            </div>

            <h3>{logoData.company}</h3>

            <p>{logoData.prompt}</p>

            <p>
              <strong>Style:</strong> {logoData.style}
            </p>

            <p>
              <strong>Color:</strong> {logoData.color}
            </p>

            <button
              className="download-btn"
              onClick={handleDownload}
            >
              Download PNG
            </button>
          </>
        ) : (
          <>
            <div className="logo-image">
              <p>🎨</p>
            </div>

            <p>No logo generated yet.</p>
          </>
        )}
      </div>
    </section>
  );
}

export default LogoPreview;