const { spawn } = require('child_process');

async function getLatestCommitMessageAndCommitAll() {
  try {
    // Get the last commit message
    const logProcess = spawn('git', ['log', '-1', '--pretty=%B']); // Get message only

    let commitMessage = '';
    logProcess.stdout.on('data', (data) => {
      commitMessage += data.toString();
    });

    logProcess.stderr.on('data', (data) => {
      console.error('Error getting last commit message:', data.toString());
    });

    await new Promise((resolve) => logProcess.on('close', resolve));

    if (commitMessage) {
      console.log('Last commit message:', commitMessage.trim());
    } else {
      console.log('No commits found in the repository.');
    }

    // Stage all changed files (assuming you want to commit all)
    const addProcess = spawn('git', ['add', '.']);

    addProcess.stdout.on('data', (data) => {
      console.log(data.toString()); // Optional: Print output from `git add`
    });

    addProcess.stderr.on('data', (data) => {
      console.error('Error staging files:', data.toString());
    });

    await new Promise((resolve) => addProcess.on('close', resolve));

    // Commit staged changes
    const commitProcess = spawn('git', ['commit', '-m', '"Commit message (replace with your desired message)"']);

    commitProcess.stdout.on('data', (data) => {
      console.log(data.toString()); // Optional: Print output from `git commit`
    });

    commitProcess.stderr.on('data', (data) => {
      console.error('Error committing changes:', data.toString());
    });

    await new Promise((resolve) => commitProcess.on('close', resolve));

    console.log('Commit successful.');
  } catch (error) {
    console.error('Error:', error);
  }
}

getLatestCommitMessageAndCommitAll();
