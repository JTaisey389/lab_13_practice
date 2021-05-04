'use strict';

let digestiveSystem;

function guts(io) {
  digestiveSystem = io.of('/digestive-system');
  digestiveSystem.on('connect', setupListeners)
}

function setupListeners(socket) {
  socket.on('swallow', handleSwallow);

  function handleSwallow(payload) {
    console.log('swallowed', payload)
    digestiveSystem.emit('swallow', payload)
  }
}

module.exports = guts;