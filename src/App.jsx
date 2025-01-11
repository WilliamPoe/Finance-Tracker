import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MonthlyComparison from './components/MonthlyComparison'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <h1> Finance Tracker </h1>
      <p>Help keep track of your finances</p>
      <MonthlyComparison/>
    </div>
  );
}

export default App;
