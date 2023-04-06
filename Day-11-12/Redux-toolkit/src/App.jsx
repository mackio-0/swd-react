import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/counterSlice'

const App = () => {

  const {count} = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className=' text-2xl'>
        {count}
      </h2>

      <button
        className=' text-white bg-violet-600 px-2 py-2 rounded-sm my-5'
        onClick={() => dispatch(increment())} 
      >
        increase
      </button>
      <button
        className=' text-white bg-violet-600 px-2 py-2 rounded-sm my-5'
        onClick={() => dispatch(decrement())} 
      >
        decrease
      </button>

    </div>
  )
}

export default App
