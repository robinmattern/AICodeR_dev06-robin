const fs = require('fs').promises;
const path = require('path');
const mime = require('mime-types');

async function markdownToHtmlImg( markdownText ) {
    // Extract file path and alt text from markdown
    const match = markdownText.match(/!\[(.*?)\]\((.*?)\)/);
    if (!match) {
        return "No image found in markdown text";
    }

    const [, altText, filePath] = match;

    try {
        // Read the image file
        const imageBuffer = await fs.readFile( filePath );

        // Convert image to base64
        const base64Image = imageBuffer.toString('base64');

        // Get MIME type
        const mimeType = mime.lookup(filePath);

        // Create data URI
        const dataUri = `data:${mimeType};base64,${base64Image}`;

        // Create HTML img tag
        const htmlImg = `<img src="${dataUri}" alt="${altText}">`;

        return htmlImg;
    } catch (error) {
        console.error('Error processing image:', error);
        return `Error processing image: ${error.message}`;
    }
}

// Usage
const markdownText = '![Diagram1](./rm41009-03_Diagram3.png)';

markdownToHtmlImg(markdownText)
    .then(htmlImg => console.log(htmlImg))
    .catch(error => console.error('Error:', error));