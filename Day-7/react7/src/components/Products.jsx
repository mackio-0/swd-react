import React, { useState, useEffect } from 'react'
import Product from './Product'

const Products = ({items}) => {

    

  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
      {items.map( product => <Product key={product.id} {...product} />)}
    </div>
  )
}

export default Products
