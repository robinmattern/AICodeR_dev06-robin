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
