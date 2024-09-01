import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/formikForm'
 
function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <formikForm />
    </div> 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
