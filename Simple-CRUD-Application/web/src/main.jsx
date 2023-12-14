import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { header as Header } from './HeaderAndFooter/header.jsx'
import Footer from './HeaderAndFooter/Footer.jsx'
import './Style/global.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="frame">
    <Header/>
    <App />
    </div>
  </React.StrictMode>,
)
