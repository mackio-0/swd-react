import React from 'react'

const Product = (props) => {
    const {id, title, image, description, price} = props
  return (
    <div className='flex flex-col w-[300px] p-10 justify-center items-center shadow-lg'>

        <img src={image} className=" max-w-[150px] h-[150px] object-contain" alt="" />

      <div className='flex flex-wrap gap-5 justify-center items-center'>
        <h2 className=' text-2xl text-ellipsis text-center text-gray-600 font-semibold'>{title.substring(0,25)}...</h2>
        <button className="px-3 py-2 bg-teal-500 rounded text-white shadow">Detail</button>
        <button className="px-3 py-2 bg-teal-500 rounded text-white shadow">Add to cart</button>
      </div>
    </div>
  )
}

export default Product
