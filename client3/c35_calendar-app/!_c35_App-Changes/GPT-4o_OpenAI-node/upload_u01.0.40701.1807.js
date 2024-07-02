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
