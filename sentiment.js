import { Client } from "@gradio/client";

async function analyzeSentiment(text) {
  try {
    const client = await Client.connect("Bandlaguda/senti-api");

    const result = await client.predict("/analyze", {
      text: text
    });

    return result.data;   // This returns sentiment + confidence
  } catch (err) {
    return { error: err.toString() };
  }
}
