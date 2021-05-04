'use strict';

const io = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';

const socket = io.connect(HOST);

socket.on('hi', payload => {
  console.log('the server is heard', payload)
  socket.emit('goodbye Mr.Bond')
})

socket.on('hello', payload => {
  io.emit('hi');
})

// socket.on('goodbye', payload => {

// })

/*  const { socket } = require('socket.io-client')*/
//====================================================================
const { socket } = require('socket.io-client') 
const io = require('socket.io-client')

const HOST = process.env.HOST || 'http://localhost:3000';

const brainConnection = io.connect(HOST);
const digestiveConnection = io.connect(`${HOST}/digestive-system`)
const healthConnection = io.connect(`${HOST}/health-system`)

brainConnection.emit('light', { level: 45 })
brainConnection.emit('light', { level: 85 })
brainConnection.emit('light', { level: 15 })

digestiveConnection.emit('eat', { food: Salad })
digestiveConnection.emit('eat', { food: Snacks })

healthConnection.emit('gassy', { let: Cowabunga })
healthConnection.emit('gassy', { let: Horn })