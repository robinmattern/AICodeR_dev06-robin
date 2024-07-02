import express from 'express';
import multer from 'multer';
import { handleQuery } from './openaiHelpers.mjs';

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.status(200).send('File uploaded successfully.');
    } else {
        res.status(400).send('File upload failed.');
    }
});

app.post('/query', async (req, res) => {
    const { query } = req.body;
    try {
        const response = await handleQuery(query);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
