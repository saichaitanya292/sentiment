async function analyzeSentiment(text) {
    const response = await fetch("https://bandlaguda-sentiment-api.hf.space/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    return await response.json();
}
