import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
