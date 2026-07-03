const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateImage = async (data) => {
  const prompt = encodeURIComponent(
    `${data.prompt}, ${data.style}, high quality`
  );

  const urls = [
    `https://image.pollinations.ai/prompt/${prompt}?model=flux&width=1024&height=1024&seed=${Date.now()}&nologo=true`,
    `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&seed=${Date.now()}&nologo=true`,
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        cache: "no-store",
      });

      if (response.ok) {
        return {
          images: [
            {
              url,
            },
          ],
        };
      }
    } catch (err) {
      console.log("Retrying...", err);
    }

    await sleep(1500);
  }

  return null;
};