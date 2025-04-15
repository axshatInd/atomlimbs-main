const express = require('express');
const cors = require('cors'); // Import the cors package
const { exec } = require('child_process');
const app = express();
const port = 3001; // Use a different port than your React app

app.use(cors()); // Enable CORS for all routes

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