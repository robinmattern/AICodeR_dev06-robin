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
