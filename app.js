'use strict';

// Load express module with `require` directive
var express = require('express');
const { Server } = require('http');
var app = express();
module.exports = Server;

// Define request response in root URL. (/)
app.get('/', function(req, res) {
  res.send('Hello Muruganantham');
});

// Define request response in about URL. (/about)
app.get('/about', function(req, res) {
  res.send('Telephones: +31 20 12345678');
});

// Launch listening server on port 8081
app.listen(8081, function() {
  console.log('App listening on port 8081!');
});
