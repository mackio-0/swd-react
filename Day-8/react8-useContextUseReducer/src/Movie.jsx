import React, { useContext } from 'react'
import { StateContext } from './context/StateContext'

const Movie = ({name, price}) => {

  return (
    <div className='list'>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
    </div>
  )
}

export default Movie
