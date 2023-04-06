import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Product = (props) => {
    const {id, title, image, description, price} = props
    const {dispatch} = StateContextCustom();

  return (
    <div className='flex flex-col w-[300px] p-10 justify-center items-center shadow-lg'>

        <img src={image} className=" max-w-[150px] h-[150px] object-contain" alt="" />

      <div className='flex flex-wrap gap-5 justify-center items-center'>
        <h2 className=' text-2xl text-ellipsis text-center text-gray-600 font-semibold'>
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h2>
        <button 
        className="px-3 py-2 bg-teal-500 rounded text-white shadow"
        >Detail</button>
        <button 
        className="px-3 py-2 bg-teal-500 rounded text-white shadow"
        onClick={() => dispatch({type: "ADD_TO_CART", payload: props})}
        >Add to cart</button>
      </div>
    </div>
  )
}

export default Product
