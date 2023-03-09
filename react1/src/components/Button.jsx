import React, { useState } from 'react'

const Button = () => {

    const [add, setAdd] = useState(true);

  return (
    <div>
      <button onClick={() => setAdd(!add)} className={`${add ? "btn btn-primary w-100" : "btn btn-danger w-100"}`}>{add ? 'Add to cart' : 'Remove From cart'}</button>
    </div>
  )
}

export default Button
