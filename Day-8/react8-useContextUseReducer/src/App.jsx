import React, { useReducer } from 'react'

const App = () => {

  const intialState = {
    count: 0
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case "increase" :
        return state.count + 1;
      case "decrease" :
        return state.count - 1;
      case "reset" :
        return 0;
      default :
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: "increase"})}>Up</button>
      <button onClick={() => dispatch({type: "decrease"})}>Down</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default App
