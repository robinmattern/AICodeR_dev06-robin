const uploadBtn = document.getElementById('uploadBtn');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

let icsContent = '';

uploadBtn.addEventListener('click', async () => {
    const fileInput = document.getElementById('icsFile');
    const file = fileInput.files[0];
    if (file) {
        icsContent = await file.text();
        alert('ICS file uploaded successfully');
    }
});

submitBtn.addEventListener('click', async () => {
    const query = document.getElementById('query').value;
    if (!icsContent) {
        alert('Please upload an ICS file first');
        return;
    }
    if (!query) {
        alert('Please enter a query');
        return;
    }

    try {
        const response = await fetch('/api/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ icsContent, query }),
        });

        if (!response.ok) {
            throw new Error('Server error');
        }

        const result = await response.json();
        resultDiv.textContent = result.response;
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'An error occurred. Please try again.';
    }
});
