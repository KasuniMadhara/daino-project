// React core
import React from 'react'
import ReactDOM from 'react-dom/client'

// Root component of the whole app
import App from './App.jsx'

// Daino global styles (colours, fonts, spacing)
import './styles/globals.css'

// Find the #root div in index.html and mount the app into it
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch bugs during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
)