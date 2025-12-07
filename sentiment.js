
async function analyzeSentiment(text) {
    const API_URL = "https://api-inference.huggingface.co/models/cardiffnlp/twitter-xlm-roberta-base-sentiment";
    const HF_TOKEN = "YOUR_HF_API_TOKEN";  // paste token here

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${HF_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
    });

    const result = await response.json();
    console.log(result);
    return result;
}

// Example use:
analyzeSentiment("I love multilingual AI models!").then(console.log);
