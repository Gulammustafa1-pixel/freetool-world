const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt, style } = req.body;

    const fullPrompt = `
${prompt}

Style: ${style}

High quality, ultra detailed, professional, 8k, masterpiece
`;

    const imageUrl =
      "https://image.pollinations.ai/prompt/" +
      encodeURIComponent(fullPrompt);

    res.json({
      images: [
        {
          url: imageUrl,
        },
      ],
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to generate image",
    });
  }
});

module.exports = router;