import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Itha import pannunga
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Browser router inga thaan irukanum */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)