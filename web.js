var express = require('express');

var app = express.createServer(express.logger());

// var buffy = fs.readFile('index.html', encoding String);
var newapp = "Happy Tidings";

app.get('/', function(request, response) {
  response.send(newapp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
