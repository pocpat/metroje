import React from 'react'
import './app.css'
// import styles from "./app.module.css"
import { Routes, Route } from 'react-router-dom'
import  Home from './pages/home/Home'
import Tenants from './pages/tenants/Tenants'


const App = () => {
  return (
    <div>
      {/* Hi from App.tsx */}
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/tenants' element={<Tenants />} />
        </Routes> 
    </div>
  )
}

export default App;