### System Prompt

We are going to create a small web application that allows users to upload an .ics (iCalendar) file and then query its content using OpenAI's GPT-3.5-turbo API. This application will use ES6 JavaScript syntax, `import` for module inclusion, and adhere to modern web practices. Files will have the `.mjs` extension.

#### 1. Project Structure

Create the following file structure for your application:

```
/project-root
  |-- client/
      |-- index.html
      |-- index.js
      |-- upload.js
  |-- server/
      |-- server.mjs
      |-- openaiHelpers.mjs
  |-- package.json
```

#### 2. Code Explanation

**Client Side:**

1. **index.html**: The main HTML file for the front-end interface of the application.
2. **index.js**: JavaScript to initialize the application.
3. **upload.js**: JavaScript for handling the file upload functionality.

```html
<!-- client/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload ICS File</title>
</head>
<body>
    <h1>Upload ICS File</h1>
    <input type="file" id="fileInput" accept=".ics"/>
    <button id="uploadButton">Upload</button>
    <script type="module" src="./index.js"></script>
</body>
</html>
```

```javascript
// client/index.js
import { uploadFile } from './upload.js';

document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        uploadFile(fileInput.files[0]);
    } else {
        alert('Please select a file first.');
    }
});
```

```javascript
// client/upload.js
export async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            console.log('File uploaded and processed:', result);
        } else {
            console.error('Error uploading file:', response.statusText);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}
```

**Server Side:**

1. **server.mjs**: Sets up the server, handles file uploads, and interacts with OpenAI API.
2. **openaiHelpers.mjs**: Contains helper functions for communicating with OpenAI API.

```javascript
// server/server.mjs
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { processICSFile } from './openaiHelpers.mjs';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const fileContent = fs.readFileSync(req.file.path, 'utf-8');
        const openAIResponse = await processICSFile(fileContent);
        res.json(openAIResponse);
    } catch (error) {
        res.status(500).send({ error: 'Server Error' });
    } finally {
        fs.unlinkSync(req.file.path); // Clean up uploaded file
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

```javascript
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
```

#### 3. Instructions for Execution and Debugging in VSCode

1. **Client:**
    - Open the `client` folder in VSCode.
    - Open a Live Server (you can use the Live Server extension).
    - Ensure the browser is pointing to `index.html`.

2. **Server:**
    - Open the `server` folder in VSCode.
    - Run the server by executing the following command in the terminal:
      ```bash
      node --experimental-modules server.mjs
      ```
    - To debug, you can set breakpoints in `server.mjs` and `openaiHelpers.mjs`.
    - Use VSCode's Node.js debugging configuration to start debugging.

**Note:** Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key in `openaiHelpers.mjs`.

#### Usage

1. **Start the server:**
    ```bash
    node --experimental-modules server/server.mjs
    ```

2. **Open the client in a browser:**
    - Open `client/index.html` using Live Server in VSCode.

3. **Upload an .ics file** and the processed output will be displayed in the console log.

### Now, let's interact with the system using the GPT-3.5-turbo model.

```markdown
**You can now ask questions about the uploaded .ics file content by querying the OpenAI API. Ensure you have your OpenAI API key ready.**
```