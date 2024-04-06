import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Welcome from './components/Welcome';

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  )
}

export default App
