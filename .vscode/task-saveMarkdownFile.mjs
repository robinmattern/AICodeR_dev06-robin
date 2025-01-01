import { spawn } from 'child_process'; // Use spawn for more control

async function openFileExplorer() {
  try {
    const explorerProcess = spawn('explorer.exe', ['.'], { // Open current directory
      stdio: ['ignore', 'pipe', 'pipe'] // Redirect stdout and stderr (optional)
    });

    // Handle output and errors from the explorer process (optional)
    explorerProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data.toString()}`); // Example logging
    });

    explorerProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data.toString()}`); // Example error handling
    });

    // User interaction with File Explorer is asynchronous, so we can't use await
    console.log('File Explorer opened. Please select a file and close the window.');

    // No return value for filename as direct retrieval is not possible
  } catch (error) {
    console.error('Error opening File Explorer:', error);
  }
}

openFileExplorer();
