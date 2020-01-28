const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3636;

io.on('connection', function(socket){
  console.log('connected');
  socket.on('send msg', function(msg){
    if (msg) {
      io.emit('receive msg', msg);
    }
  });
  socket.on('first connect', () => {
    const id = Math.random().toString(36).slice(2);
    io.emit('create room', {
      name: `Room ${id}`,
      id
    });
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});