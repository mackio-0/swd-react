import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const One = () => {
    const {count} = useContext(StateContext)
  return (
    <div>
      <h2>One: {count} </h2>
    </div>
  )
}

export default One
