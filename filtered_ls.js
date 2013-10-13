var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(file) {
    if (file.endsWith('.' + process.argv[3])) { console.log(file) };
  })
});

String.prototype.endsWith = function(suffix) {
  return this.match(suffix + '$') == suffix;
};
