import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addtocart from './components/Addtocart'
import Navbar from './components/Navbar'
import Products from './components/Products'

const App = () => {

  return (
    <div className=' flex flex-col h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/addtocart' element={<Addtocart/>} />
      </Routes>
    </div>
  )
}

export default App
