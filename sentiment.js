// Use the library loaded from CDN
async function analyzeSentiment(text) {
    try {
        const client = await window.gradioClient.Client.connect("Bandlaguda/senti-api");

        const result = await client.predict("/analyze", {
            text: text,
        });

        return result.data;
    } catch (err) {
        return { error: err.toString() };
    }
}

async function runSentiment() {
    const text = document.getElementById("inputText").value;

    try {
        const result = await analyzeSentiment(text);

        document.getElementById("output").innerText =
            JSON.stringify(result, null, 2);
    } catch (err) {
        document.getElementById("output").innerText =
            "Error: " + err.toString();
    }
}
