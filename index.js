const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3008;

// Serve the main iframe test page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'iframe-test.html'));
});

// Serve the embedded page and allow iframe embedding
app.get('/iframe-test', (req, res) => {
    res.sendFile(path.join(__dirname, 'iframe-test.html'));
});

// HTTPS server options
const httpsOptions = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});
