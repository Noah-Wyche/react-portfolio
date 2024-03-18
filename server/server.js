const express = require('express');
const serverConfig = require('./serverConfig');
const path = require('path'); // Import the 'path' module

const app = express();

app.use(express.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = serverConfig.port || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
