async function analyzeSentiment(text) {
    const API_URL = "https://api-inference.huggingface.co/models/cardiffnlp/twitter-xlm-roberta-base-sentiment";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
    });

    const result = await response.json();
    console.log(result);
    return result;
}
