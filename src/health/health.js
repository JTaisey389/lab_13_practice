'use strict';

let healthSystem;

function imune(io) {
  healthSystem = io.of('/health-system');
  healthSystem.on('connect', setupListeners)
}

function setupListeners(socket) {
  socket.on('sick', handleSwallow);

  function handleSwallow(payload) {
    console.log('hey your sick', payload)
    healthSystem.emit('sick', payload)
  }
}
module.exports = imune;