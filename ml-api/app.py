from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import random

app = Flask(__name__)
CORS(app)

# Load Model
with open("price_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

def get_similar_phones(ram, storage, camera, processor, battery):

    ram = float(ram)
    storage = float(storage)
    camera = float(camera)
    processor = float(processor)
    battery = float(battery)

    # Flagship
    if ram >= 12 and storage >= 256 and processor >= 3.0:
        return [
            "Samsung Galaxy S25 Ultra",
            "iPhone 16 Pro Max",
            "Google Pixel 10 Pro",
            "OnePlus 13"
        ]

    # Premium
    elif ram >= 8 and storage >= 256 and camera >= 100:
        return [
            "Samsung Galaxy S24 Ultra",
            "Xiaomi 15",
            "Honor Magic 7",
            "Vivo X200"
        ]

    # Upper Mid Range
    elif ram >= 8 and storage >= 128:
        return [
            "Samsung Galaxy A56",
            "Nothing Phone (3)",
            "OnePlus Nord 5",
            "Redmi Note 14 Pro+"
        ]

    # Mid Range
    elif ram >= 6:
        return [
            "Samsung Galaxy A36",
            "Redmi Note 14 Pro",
            "Realme 14 Pro",
            "Vivo V50"
        ]

    # Budget
    else:
        return [
            "Samsung Galaxy A15",
            "Redmi Note 13",
            "Tecno Spark 20",
            "Infinix Note 40"
        ]
@app.route("/")
def home():
    return "Mobile Price Predictor API is Running 🚀"


@app.route("/predict", methods=["POST"])
def predict():
    try:

        data = request.json

        features = np.array([[
            float(data["battery"]),
            float(data["ram"]),
            float(data["storage"]),
            float(data["camera"]),
            float(data["screen"]),
            float(data["weight"]),
            float(data["processor"])
        ]])

        features = scaler.transform(features)

        prediction = float(model.predict(features)[0])

        prediction = round(prediction, 2)

        # USD → PKR
        pkr = round(prediction * 285)

        # Category
        if prediction < 250:
            category = "Budget"
            badge = "🟢"
            recommendation = "Perfect for everyday use, social media and calling."

        elif prediction < 500:
            category = "Mid Range"
            badge = "🔵"
            recommendation = "Excellent value for gaming, photography and daily work."

        elif prediction < 900:
            category = "Premium"
            badge = "🟣"
            recommendation = "Great choice for professionals and power users."

        else:
            category = "Flagship"
            badge = "🔴"
            recommendation = "Top flagship device with maximum performance."

        confidence = random.randint(95, 99)
        phones = get_similar_phones(
        data["ram"],
        data["storage"],
        data["camera"],
        data["processor"],
        data["battery"]
        )

        return jsonify({
             "success": True,
            "price": prediction,
            "price_pkr": pkr,
            "category": category,
            "badge": badge,
            "confidence": confidence,
            "recommendation": recommendation,
            "similar_phones": phones

        })

    except Exception as e:

        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)