import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {

  const location = useLocation();
  console.log(location);  // location object

  return (
    <div>
      <h1>Contact</h1>
      <h3>{location.state?.test}</h3>
      {/* <h3>{location.state ? location.state.test : ''}</h3> */}
    </div>
  )
}

export default Contact
