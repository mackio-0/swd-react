import React, { useContext } from 'react'
import { StateContext } from './context/StateContext'

const Navbar = () => {

  const {movieList, setMovieList} = useContext(StateContext);

  return (
    <div style={{display: "flex", justifyContent:"space-around", backgroundColor: "#17c1c1", color:"white", boxShadow: "1px 1px 5px black"}}>
      <h2>Developed by .....</h2>
      <div>
        <h2>Movie List: {movieList.length}</h2>
      </div>
    </div>
  )
}

export default Navbar
