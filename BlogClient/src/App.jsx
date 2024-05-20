import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Sidebar from './components/Sidebar';
import Login from './components/Login';

function App() {


  return (
    <BrowserRouter>
    <>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
