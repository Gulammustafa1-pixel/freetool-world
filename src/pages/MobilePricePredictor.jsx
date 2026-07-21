import { useState } from "react";
import { predictPrice } from "../api/predict";
import "../styles/MobilePricePredictor.css";

function MobilePricePredictor() {
  const [form, setForm] = useState({
    battery: "",
    ram: "",
    storage: "",
    camera: "",
    screen: "",
    weight: "",
    processor: "",
  });

  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
const [category, setCategory] = useState("");
const [pkr, setPkr] = useState(0);
const [confidence, setConfidence] = useState(0);
const [recommendation, setRecommendation] = useState("");
const [similarPhones, setSimilarPhones] = useState([]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = async () => {

    if (
      !form.battery ||
      !form.ram ||
      !form.storage ||
      !form.camera ||
      !form.screen ||
      !form.weight ||
      !form.processor
    ) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    const result = await predictPrice(form);

    if (result?.success) {

  setPrice(result.price);

  setPkr(result.price_pkr);

  setCategory(result.badge + " " + result.category);

  setConfidence(result.confidence);

  setRecommendation(result.recommendation);
  setSimilarPhones(result.similar_phones);

} else {

  alert("Prediction Failed");

}

    setLoading(false);
  };

  return (
    <section className="page-container">

      <h1 className="page-title">
        📱 Mobile Price Predictor
      </h1>

      <p className="page-subtitle">
        Predict smartphone & tablet prices using Artificial Intelligence.
      </p>

      <div className="predictor-wrapper">

        <div className="predict-card">

          <h2>Device Specifications</h2>

          <div className="input-grid">

            <div className="input-group">
              <label>🔋 Battery (mAh)</label>
              <input
                type="number"
                name="battery"
                placeholder="5000"
                value={form.battery}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>💾 RAM (GB)</label>
              <input
                type="number"
                name="ram"
                placeholder="8"
                value={form.ram}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>💽 Storage (GB)</label>
              <input
                type="number"
                name="storage"
                placeholder="128"
                value={form.storage}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>📷 Camera (MP)</label>
              <input
                type="number"
                name="camera"
                placeholder="50"
                value={form.camera}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>📺 Screen Size</label>
              <input
                type="number"
                step="0.1"
                name="screen"
                placeholder="6.7"
                value={form.screen}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>⚖ Weight (g)</label>
              <input
                type="number"
                name="weight"
                placeholder="185"
                value={form.weight}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>⚡ Processor (GHz)</label>
              <input
                type="number"
                step="0.1"
                name="processor"
                placeholder="3.2"
                value={form.processor}
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            className="predict-btn"
            onClick={handlePredict}
          >
            {loading ? "Predicting..." : "🚀 Predict Price"}
          </button>

        </div>

        <div className="result-card">

          <h2>Prediction Result</h2>

          {price ? (
  <>

    <div className="result-price">
      ${price}
    </div>

    <h2 style={{ marginTop: "15px" }}>
      PKR {pkr.toLocaleString()}
    </h2>

    <div className="price-badge">
      {category}
    </div>

    <div className="result-details">

      <p>
        <span>⭐ Confidence</span>
        <span>{confidence}%</span>
      </p>

      <p>
        <span>🤖 AI Recommendation</span>
      </p>

      <p
        style={{
          lineHeight: "28px",
          borderBottom: "none"
        }}
      >
        {recommendation}
      </p>

      <hr
        style={{
          margin: "20px 0",
          opacity: .2
        }}
      />

      <p>
        <span>🔋 Battery</span>
        <span>{form.battery} mAh</span>
      </p>

      <p>
        <span>💾 RAM</span>
        <span>{form.ram} GB</span>
      </p>

      <p>
        <span>💽 Storage</span>
        <span>{form.storage} GB</span>
      </p>

      <p>
        <span>📷 Camera</span>
        <span>{form.camera} MP</span>
      </p>

      <p>
        <span>📺 Screen</span>
        <span>{form.screen}"</span>
      </p>

      <p>
        <span>⚡ Processor</span>
        <span>{form.processor} GHz</span>
      </p>
      <hr />

<h3 className="similar-title">
  📱 Similar Phones
</h3>

<div className="similar-phone-list">

  {similarPhones.map((phone, index) => (

    <div
      className="phone-item"
      key={index}
    >
      ✔ {phone}
    </div>

  ))}

</div>

    </div>

  </>
) : (

  <div className="result-placeholder">

    <h3>🤖 AI Ready</h3>

    <p>
      Fill specifications and click
      <br />
      <strong>Predict Price</strong>
    </p>

  </div>

)}

        </div>

      </div>

    </section>
  );
}

export default MobilePricePredictor;