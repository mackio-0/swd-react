import React from 'react'

const Card = (items) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt="" width={'200px'} />
          <p>{item.description}</p>
          <button className="btn btn-outline-primary">Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Card
