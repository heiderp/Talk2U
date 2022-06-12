import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
const ENDPOINT = 'http://localhost:3001'
const socket = io.connect(ENDPOINT)
function App() {
  const [response, setResponse] = useState('')

  useEffect(() => {
    socket.emit('test', { status: 'good' })
  }, [])
  useEffect(() => {
    socket.on('return_data', (data) => {
      console.log(data)
    })
  }, [])
  return (
    <div className="App">
      <h1>Inicio</h1>
      <div>{response}</div>
    </div>
  )
}

export default App
