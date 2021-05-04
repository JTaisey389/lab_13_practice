'use strict'
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);

require('./src/digestive/digestive')(io)
require('./src/health/health')(io)
require('./events')(io)