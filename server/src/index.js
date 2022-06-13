const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const server = http.createServer(app)
const trainChatBotIA = require('./chatbot')
const connectWebSocket = require('./chatbot')
app.use(cors())
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
trainChatBotIA.trainChatBotIA()
connectWebSocket.connectWebSocket(io)
/* io.on('connection', (socket) => {
  console.log(`Usuario Conectado:${socket.id}`)
  socket.on('test', (data) => {
    console.log(data)
    socket.emit('return_test', data)
  })
}) */

server.listen(3001, () => {
  console.log('sever on')
})
