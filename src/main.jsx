import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoProviderContext } from './components/todo-create-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProviderContext>
      <App />
    </TodoProviderContext>
    
  </React.StrictMode>,
)
