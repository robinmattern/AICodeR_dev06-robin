import fetch from 'node-fetch';

const OPENAI_API_URL = 'https://api.openai.com/v1/endpoint';
const API_KEY = 'your-openai-api-key-here';

// Construct the message object according to the latest spec
const messageObject = {
    model: 'text-davinci-003',
    prompt: [
        {
            role: 'system',
            content: 'You are a helpful assistant.'
        },
        {
            role: 'user',
            content: 'Tell me a joke.'
        }
    ],
    max_tokens: 100,
    n: 1,
    stop: null,
    temperature: 0.9,
};

async function submitToOpenAI() {
    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageObject)
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Received response from OpenAI:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

submitToOpenAI();
