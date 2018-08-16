const path = require('path');
const cors = require('cors');
//Install express server
const express = require('express');
const app = express();

app.use(cors());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Set our api routes proxy to point to spring boot server
app.use('/server', proxy('https://carpoolingapplication.herokuapp.com'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 9090);
