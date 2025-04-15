const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001; // Use a different port than your React app

app.get('/run-unity', (req, res) => {
  // Path to the Unity Hub executable
  const unityPath = '"C:\\Program Files\\Unity Hub\\Unity Hub.exe"';

  // Execute the Unity Hub
  exec(unityPath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Unity Hub: ${error}`);
      return res.status(500).send('Error launching Unity Hub');
    }
    console.log(`Unity Hub launched: ${stdout}`);
    res.send('Unity Hub launched successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});