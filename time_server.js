var net = require('net');
var moment = require('moment');

var server = net.createServer(function (socket) {
  var today = moment().format('YYYY-MM-DD HH:mm');
  socket.end(today + '\n');
});

server.listen(8000);
