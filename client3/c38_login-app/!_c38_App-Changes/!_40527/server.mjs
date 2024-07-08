// server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import { parseICSData } from './parseICS.mjs';
import { queryGPT } from './query.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload-ics', async (req, res) => {
  const icsData = req.body.icsData;
  if (!icsData) {
    return res.status(400).send('No ICS data provided');
  }

  try {
    const parsedEvents = parseICSData(icsData);
    return res.status(200).json({ events: parsedEvents });
  } catch (error) {
    return res.status(500).send('Error parsing ICS file');
  }
});

app.post('/query', async (req, res) => {
  const query = req.body.query;
  if (!query) {
    return res.status(400).send('No query provided');
  }

  try {
    const response = await queryGPT(query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send('Error querying GPT-3.5-turbo');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
