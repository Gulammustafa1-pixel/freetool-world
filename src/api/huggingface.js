const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

export async function generateLogo(prompt) {
  try {
    const response = await fetch(
      "https://router.huggingface.co/fal-ai/fal-ai/flux/schnell",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate logo");
    }

    const data = await response.json();

    console.log("HF Response:", data);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}