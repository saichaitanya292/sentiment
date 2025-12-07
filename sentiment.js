async function analyzeSentiment(text) {
    const url = "https://bandlaguda-senti-api.hf.space/analyze";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error("HTTP " + response.status + ": " + error);
    }

    return await response.json();
}
