'use strict';

const io = require('socket.io')(3000);

const guts = io.of('/digestive-system')
const health = io.of('/health-system')

io.on('connection', socket => {
  console.log('client:', socket.id);

  socket.on('light', payload => {
    io.emit('brightness', payload);
  })

  socket.on('smell', payload => {
    io.emit('smell', payload);
  })
})

guts.on('connection', socket => {
  socket.on('eat', (payload) => {
    guts.emit('eat', payload)
  })
})

health.on('connection', socket => {
  socket.on('gassy', (payload) => {
    guts.emit('gassy', payload)
  })
})