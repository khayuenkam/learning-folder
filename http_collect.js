var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(req) {
  req.setEncoding('utf8');
  req.pipe(bl(function(err, data) {
    if (err) {
      console.log(data);
    }

    data = data.toString();

    console.log(data.length); 
    console.log(data); 
  }));
});
