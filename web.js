var express = require('express');
// file name
var inputFile = "./index.html";
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync(inputFile, 'utf-8'));
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
