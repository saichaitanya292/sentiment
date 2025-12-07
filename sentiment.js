async function analyzeSentiment(text) {
    const response = await fetch(
        "https://bandlaguda-senti-api.hf.space/api/predict/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Gradio expects { data: [ ...inputs... ] }
            body: JSON.stringify({
                data: [text]
            })
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error("HTTP " + response.status + ": " + errorText);
    }

    const result = await response.json();
    console.log("HF result:", result);
    return result;
}
