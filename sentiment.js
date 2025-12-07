async function analyzeSentiment(text) {
    const response = await fetch(
        "https://bandlaguda-senti-api.hf.space/api/predict/
senti-api",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Gradio expects inputs wrapped as an array in `data`
            body: JSON.stringify({
                data: [text]
            })
        }
    );

    // if 404/500 etc – throw with message text (what you see now)
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error("HTTP " + response.status + ": " + errorText);
    }

    const result = await response.json();
    console.log("HF result:", result); // check in DevTools
    return result;
}
