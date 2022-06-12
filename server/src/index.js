const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const server = http.createServer(app)
app.use(cors())
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`user:${socket.id}`)
  socket.on('test', (data) => {
    console.log(data)
    socket.emit('return_data', data)
  })
})

server.listen(3001, () => {
  console.log('sever on')
})
