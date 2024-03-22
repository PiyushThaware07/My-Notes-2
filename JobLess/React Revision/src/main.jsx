import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a new context
export const MyContext = createContext()
const profile = {
  fname: "Piyush",
  lname: "Thaware",
  email: "Piyush@gmail.com",
  age: 23
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MyContext.Provider value={profile}>
    <App />
  </MyContext.Provider>
  // </React.StrictMode>,
)
