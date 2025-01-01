// main.mjs
import { sendRequest } from './openaiClient.mjs';

const apiKey = 'your-openai-api-key-here';
const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Tell me a joke.' }
];

(async () => {
    try {
        const response = await sendRequest(apiKey, messages);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Failed to get a response from OpenAI:', error.message);
    }
})();
