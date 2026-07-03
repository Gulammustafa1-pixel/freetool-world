export const generateImage = async (data) => {
  try {
    const fullPrompt = `
${data.prompt}

Style: ${data.style}

Size: ${data.size}

High quality, ultra detailed, professional, 8k, masterpiece
`;

    const imageUrl =
      "https://image.pollinations.ai/prompt/" +
      encodeURIComponent(fullPrompt);

    return {
      images: [
        {
          url: imageUrl,
        },
      ],
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};