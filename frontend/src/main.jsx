import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProviders } from './providers/auth.providers'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProviders>
        <App />
      </AuthContextProviders>
    </BrowserRouter>
  </React.StrictMode>
)
