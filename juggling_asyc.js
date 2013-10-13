var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

var httpGet = function(index) {
  http.get(process.argv[2 + index], function(req) {
    req.pipe(bl(function(err, data) {
      if (err) {
        console.log(data);
      }

      result[index] = data.toString();
      count++;

      if(count === 3) {
        result.forEach(function(data) {
          console.log(data);
        });
      }
    }));
  });
}

for(var i = 0; i < 3; i++) {
  httpGet(i);
}
