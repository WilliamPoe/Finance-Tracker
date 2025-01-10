import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Finance Tracker </h1>
      <p>Help keep track of your finances</p>
    </>
  )
}

export default App
