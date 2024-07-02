import { handleFileUpload } from './upload.js';

document.getElementById('uploadButton').addEventListener('click', handleFileUpload);
document.getElementById('queryButton').addEventListener('click', async () => {
    const query = document.getElementById('queryInput').value;
    const response = await fetch('http://localhost:3000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    const result = await response.json();
    document.getElementById('responseOutput').textContent = JSON.stringify(result, null, 2);
});
