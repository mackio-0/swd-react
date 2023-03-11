import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Error from './components/Error'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/admin' element={<Admin/>} /> */}
        <Route path='*' element={<Error/>} />
      </Routes>

    </div>
  )
}

export default App
