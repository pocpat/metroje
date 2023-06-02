import React from 'react'
import "./app.css"
import { Routes, Route } from 'react-router-dom'
import  Home from './pages/home/Home'


const App = () => {
  return (
    <div>
      Hi from App.tsx
     <Routes>
       <Route path='/' element={<Home />} />
        </Routes> 
    </div>
  )
}

export default App