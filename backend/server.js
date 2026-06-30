const express = require("express");
const cors = require("cors");
require("dotenv").config();

const logoRoute = require("./routes/logo");
const imageRoute = require("./routes/image");

const app = express();

app.use(cors());
app.use(express.json());

// Logo Generator
app.use("/api/logo", logoRoute);

// Image Generator
app.use("/api/image", imageRoute);

app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});