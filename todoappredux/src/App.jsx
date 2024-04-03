import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Task } from './Task'


function App() {
  return (    
    <div>
        <h1>Todo App with Redux by samad</h1>      
        <Task />
    </div>    
  )
}

export default App;
