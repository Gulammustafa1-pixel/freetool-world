const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { company, prompt, style, color } = req.body;

    const fullPrompt = `
Create a professional modern vector logo.

Company Name:
${company}

Description:
${prompt}

Style:
${style}

Primary Color:
${color}
`;

    console.log("HF Token:", process.env.HF_TOKEN ? "Loaded ✅" : "Missing ❌");

    const response = await axios.post(
      "https://router.huggingface.co/fal-ai/fal-ai/flux/schnell",
      {
        prompt: fullPrompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("HF Response:");
    console.log(response.data);

    res.json(response.data);

  } catch (error) {
    console.log("========== ERROR ==========");
    console.log(error.response?.status);
    console.log(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to generate logo",
    });
  }
});

module.exports = router;