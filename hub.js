'use strict';

//first we pull in socket.io and assign it to a port for listening/setting up our server
const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

// then we allow for incoming "network" (socket) requests
io.on('connection', socket => {
  // console.log('Your connection data:', socket )
  console.log('Your connection id:', socket)

    socket.on('hello', payload => {
      io.emit('hi' , { data: 'this is the payload' });
    })
})

// yesterday we worked on .on and .emit