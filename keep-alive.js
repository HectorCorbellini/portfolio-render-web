const http = require('http');

// The URL will need to be updated once you know your Glitch project URL
const url = 'https://YOUR-PROJECT-NAME.glitch.me';

// Ping every 4.5 minutes (270000 ms) to stay within the 5-minute sleep window
setInterval(() => {
  http.get(url, (res) => {
    console.log(`Pinged ${url}, status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Error pinging ${url}: ${err.message}`);
  });
}, 270000);

console.log('Keep-alive service started');
