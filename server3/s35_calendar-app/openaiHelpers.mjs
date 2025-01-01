import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = 'your_openai_api_key_here'; // Replace with your actual API key

export async function handleQuery(query) {
    const icsFilePath = path.join('uploads', fs.readdirSync('uploads')[0]);
    const icsContent = fs.readFileSync(icsFilePath, 'utf-8');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: `Here is the ICS file content:\n${icsContent}` },
                { role: 'user', content: query }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
