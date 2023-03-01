import "./store"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "hooks-for-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</Provider>
)
