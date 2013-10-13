var fs = require('fs');
var fileName = process.argv[2];
var number = 0;

fs.readFileSync(fileName).toString().split('\n').forEach(function(line){
  number++;
});

console.log(number);


