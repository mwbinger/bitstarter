var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffy = fs.readFileSync('index.html');
var newapp = buffy.toString();

// var newapp = "Happy Tidings";

app.get('/', function(request, response) {
  response.send(newapp);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
