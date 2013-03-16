
var express = require('express')
  , server = require('http').createServer(app)
  , io = require('socket.io')
  , app = express()
  , io = io.listen(server);

server.listen(1337);

io.sockets.on('connection', function(socket) {
  socket.emit('news', { hello: 'workd'});
  socket.on('my other event', function (data) {
    console.log(data);
  });
});