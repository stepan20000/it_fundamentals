const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || 8080;

app.use(favicon(path.join(__dirname,'resources', 'public','images', 'icons8-autumn-96.png')));
app.use(express.static('resources'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
