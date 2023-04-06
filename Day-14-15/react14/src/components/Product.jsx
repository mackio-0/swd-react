import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/services/cartSlice'

const Product = (props) => {

    const {id, image, price, title, description} = props

    const dispatch = useDispatch()

  return (
    <div>
      <div className=' flex flex-col w-72 shadow p-7 items-center'>
        <img src={image} alt="" className='max-w-[150px] h-[200px] object-contain'/>
        <div className=' mt-5 flex flex-col gap-3'>
            <h2 className=''>{title.substring(0, 25)}</h2>
            <p>${price}</p>
            <button
                className=' bg-violet-600 text-white px-6 py-2 w-full'
                onClick={() => dispatch(addToCart(props))}
            >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
