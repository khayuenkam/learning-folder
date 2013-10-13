module.exports = function(path, extension, callback) {
  var fs = require('fs');
  var regex = new RegExp('\\.' + extension + '$');

  fs.readdir(path, function(err, list) {
    if (err) { 
      return callback(err);
    }

    list = list.filter(function(file) {
      return regex.test(file);
    });

    return callback(null, list);
  });
}
