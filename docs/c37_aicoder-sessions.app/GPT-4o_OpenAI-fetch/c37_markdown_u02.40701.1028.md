Sure! Here's a Node.js script to submit and receive a JSON object from the OpenAI V1 API using the `fetch` function. This script will adhere to the latest OpenAI API specifications for message objects, and include error handling.

## Overview

The Node.js script below uses the `fetch` API to submit a JSON object to the OpenAI V1 API and handle the responses, including errors.

## Directory Structure

```
.
├── openaiClient.mjs
└── main.mjs
```

### File: `openaiClient.mjs`

This file contains a function to send a request to the OpenAI API and receive the response.

```javascript
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
```

**Explanation:**

1. The `sendRequest` function takes two parameters: `apiKey` and `messages`.
2. It prepares the URL, request body, and headers for the API request.
3. It uses the `fetch` function to send a POST request to the OpenAI API.
4. If the response is not OK, it throws an error.
5. If the request is successful, it parses the JSON response and returns it.
6. Any errors during the fetch process are caught and logged.

### File: `main.mjs`

This file contains the main script to use the `openaiClient.mjs` module, send the request, and handle the response.

```javascript
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
```

**Explanation:**

1. The `apiKey` variable stores your OpenAI API key.
2. The `messages` array contains message objects as per the latest spec.
3. The script uses an IIFE (Immediately Invoked Function Expression) to handle asynchronous calls.
4. Inside the IIFE, it calls the `sendRequest` function and logs the response.
5. If an error occurs, it logs an error message.

## Installation and Running the Application

### Steps to Install Necessary Modules

1. Initialize a new Node.js project and install the required modules.

```sh
npm init -y
npm install node-fetch
```

### Steps to Run the Application

1. Ensure you have your OpenAI API key available.
2. Replace `'your-openai-api-key-here'` in the `main.mjs` file with your actual API key.
3. Run the script using Node.js.

```sh
node main.mjs
```

This will execute the script, send a request to the OpenAI API, and print the response in the console. Ensure that your Node.js version supports ES6 modules by using a compatible version or adding the property `"type": "module"` in your `package.json`.