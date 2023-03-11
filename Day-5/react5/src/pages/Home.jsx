import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Child from '../components/Child'

const Home = () => {

  const inputRef = useRef();

  const navigate = useNavigate();
  
  const click = () => {
    navigate('/contact', {state:{test: inputRef.current.value}})
  }
  return (
    <div>
      <h1>Home</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={click}>Click</button>
    </div>
  )

}

export default Home
