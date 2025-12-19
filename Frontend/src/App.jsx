import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CrossNumbersGame from './components/CrossNumbersGame.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
    <CrossNumbersGame />
    </div>
    
  )
}

export default App
