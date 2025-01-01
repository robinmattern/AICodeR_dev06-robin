const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const speech = require('@google-cloud/speech');
const path = require('path');

async function extractTranscript(videoPath) {
    // Extract audio from video
    const audioPath = path.join(__dirname, 'audio.wav');
    
    await new Promise((resolve, reject) => {
        
        ffmpeg(videoPath)
            .toFormat('wav')
            .audioChannels(1)
            .audioFrequency(16000)
            .save(audioPath)
            .on('end', resolve)
            .on('error', reject);
    });

    // Initialize speech client
    const client = new speech.SpeechClient();

    // Read audio file
    const audio = {
        content: fs.readFileSync(audioPath).toString('base64'),
    };

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
    };

    const request = {
        audio: audio,
        config: config,
    };

    try {
        // Perform the transcription
        const [response] = await client.recognize(request);
        const transcription = response.results
            .map(result => ({
                text: result.alternatives[0].transcript,
                startTime: result.alternatives[0].words[0].startTime.seconds,
                endTime: result.alternatives[0].words[result.alternatives[0].words.length-1].endTime.seconds
            }));

        // Cleanup
        fs.unlinkSync(audioPath);
        
        return transcription;

    } catch (error) {
        console.error('Error:', error);
        fs.unlinkSync(audioPath);
        throw error;
    }
}

// Usage example:
  var aVideo_Path="rm41212_FormR-Mtg.mp4"
   extractTranscript(  path.join(__dirname, aVideo_Path ) ) 
       .then(transcript => console.log(transcript))
       .catch(error => console.error(error));
