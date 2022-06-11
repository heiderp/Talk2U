const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
// SETTING
const PORT = 3001 || process.env.PORT
app.disable('x-powered-by')

/* // MID
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) */
io.on('connection', (socket) => {
  console.log('Welcome to Talk2U')
  socket.emit('message', 'QLQ')
})

// ROUTES

// SERVER
server.listen(PORT, () => {
  console.log(`sever ${PORT}`)
})
