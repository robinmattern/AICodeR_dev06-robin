// query.mjs
import fetch from 'node-fetch';

const API_KEY = 'YOUR_CHATGPT_API_KEY';
const API_URL = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

export async function queryGPT(prompt) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100
    })
  });

  const data = await response.json();
  return data;
}
