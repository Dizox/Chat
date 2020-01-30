const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3636;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());

const rooms = [];

io.on('connection', function(socket){
  console.log('connected');
  socket.on('send msg', function(msg){
    if (msg) {
      io.emit('receive msg', msg);
    }
  });
  socket.on('first connect', () => {
    console.log(socket.id);

    const id = Math.random().toString(36).slice(2);
    const room = {
      name: `Room ${id}`,
      id
    }
    io.sockets.connected[socket.id].emit('create room', room);
    rooms.push(room);
  });
});

app.get('/room', (request, response) => {
  const { id } = request.query;
  const room = rooms.find( room => room.id === id);
  if (room === undefined) {
    return response.status('404').json('error');
  }
  response.status(200).json(room);
})

http.listen(port, function(){
  console.log('listening on *:' + port);
});