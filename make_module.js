var filter = require('./asynchorous_list');

filter(process.argv[2], process.argv[3], function(err, data) {
  if (err) { console.log(''); }

  data.forEach(function(file) {
    console.log(file);
  });
});
