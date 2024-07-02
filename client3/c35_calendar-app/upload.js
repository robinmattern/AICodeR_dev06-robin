export async function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('File uploaded successfully.');
    } else {
        alert('File upload failed.');
    }
}
