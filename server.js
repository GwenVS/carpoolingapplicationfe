// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use(cors());

// Point static path to dist
app.use(express.static(__dirname + '/dist/carpoolingapplicationfe'));

// Set our api routes proxy to point to spring boot server
app.use('/server', proxy(serverUrl));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/carpoolingapplicationfe/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
