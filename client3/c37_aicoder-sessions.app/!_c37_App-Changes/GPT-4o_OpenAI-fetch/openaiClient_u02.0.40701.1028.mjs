// openaiClient.mjs
import fetch from 'node-fetch';

/**
 * Sends a JSON object to the OpenAI V1 API and returns the response.
 * @param {string} apiKey - Your OpenAI API key.
 * @param {Array<Object>} messages - An array of message objects.
 * @returns {Promise<Object>} - The response from the OpenAI API.
 */
export async function sendRequest(apiKey, messages) {
    const url = 'https://api.openai.com/v1/chat/completions';
    
    const body = JSON.stringify({ model: 'gpt-3.5-turbo', messages: messages });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.error('Error during API request', error);
        throw error;
    }
}
