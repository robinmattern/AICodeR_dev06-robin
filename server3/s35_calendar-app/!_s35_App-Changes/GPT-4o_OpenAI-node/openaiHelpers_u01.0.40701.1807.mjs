// server/openaiHelpers.mjs
import fetch from 'node-fetch';

export async function processICSFile(fileContent) {
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const messages = [
        { role: 'system', content: 'You are an assistant that reads .ics file content.' },
        { role: 'user', content: `Here is the .ics file content:\n\n${fileContent}` },
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
        })
    });

    if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
