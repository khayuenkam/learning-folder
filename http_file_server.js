var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

  console.log(req);


  var readStream = fs.createReadStream(path);

  readStream.on('data', function(chunk) {
    res.send(chunk);
  });
  
});

server.listen(8000);

