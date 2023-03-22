import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const Three = () => {
    const {setCount} = useContext(StateContext)
  return (
    <div>
      <button onClick={() => setCount(prev => prev - 1)}>Decrease From three</button>
    </div>
  )
}

export default Three
