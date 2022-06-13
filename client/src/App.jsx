import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
const ENDPOINT = 'http://localhost:3001'
const socket = io.connect(ENDPOINT)
function App() {
  const [response, setResponse] = useState('')
  const testConnection = () => {
    socket.emit('join', 'user1') // .join (url,canal_a_unirse)
    socket.emit('new-msg', { msg: 'hi', room: 'user1' })
  }
  const getResTestConnection = () => {
    socket.on('send-msg-response', (data) => {
      console.log(data)
    })
  }
  const getDataSockect = () => {
    socket.emit('test', { status: 'good' })
  }
  useEffect(() => {
    socket.on('return_test', (data) => {
      console.log(data)
      setResponse(data)
    })
  }, [])
  useEffect(() => {
    getResTestConnection()
  })
  return (
    <div className="App">
      <h1>Inicio</h1>
      <div>{response.status}</div>
      <button onClick={testConnection}> Conseguir Informacion</button>
    </div>
  )
}

export default App
