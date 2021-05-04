'use strict';

let globalConnection;

function defaultConnection(io){
  globalConnectio = io;
  globalConnection.on('connect', serverListeners);
}

function serverListeners(socket) {
  socket.on('smell', handleSmell)
  socket.on('eat', handleEat)

  function handleSmell(payload){
    console.log('the smell', payload)
    globalConnection.emit('smell', payload)
  }

  function handleEat(payload){
    console.log('currently eating', payload)
    globalConnection.emit('eat', payload)
  }
}
module.exports = defaultConnection;