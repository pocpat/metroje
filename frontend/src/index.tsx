import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'

const container = document.getElementById('app-root')!
const root = createRoot(container!)
// const root = createRoot(container)

root.render(

    <Router>    
        <App />    
    </Router>
)

{/* <h1>Hello from index. ts!</h1>) */}