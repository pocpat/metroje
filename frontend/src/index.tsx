import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

const container = document.getElementById('app-root')!
const root = createRoot(container!)

root.render(
   <Router>

    {/* <p>Hello from index.tsx</p> */}
    <App />

  </Router>
)