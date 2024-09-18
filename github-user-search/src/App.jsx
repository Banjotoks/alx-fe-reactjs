import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'

function App() {

  return (
    <Router>
      <div className='App'>
        <h1>Github User Search</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:username' element={<User />} />
          <Route></Route>
        </Routes>

      </div>
    </Router>

  )   
}

export default App
