import React from "react";
import {RiArrowUpSFill, RiArrowDownSFill} from "react-icons/ri";
import { useDispatch } from "react-redux"
import { removeFromCart, addItemsQuantity, subtractItemQuantity } from "../feature/services/cartSlice"

const Cart = props => {
  const {id, title, image, price, quantity} = props;
  const dispatch = useDispatch();

  const oneItemPrice = price * quantity;

  return (
    <div className=" flex px-40 py-2 items-center mt-5 ">
      <div className=" flex items-center gap-7">
        <img
          src={image}
          className=" w-[100px] h-[100px] object-contain"
          alt=""
        />
        <div>
          <h3>{title.substring(0, 25)}</h3>
          <p>${price} { quantity > 1 && ` | \$${oneItemPrice.toFixed(2)}`}</p>
          <button 
            className=" text-rose-500"
            onClick={() => dispatch(removeFromCart(props))}
          >Remove</button>
        </div>
      </div>

      <div className=" ml-auto flex flex-col items-center">
        <button onClick={() => dispatch(addItemsQuantity(props))}>
          <RiArrowUpSFill className="text-2xl" />
        </button>

        <p>{quantity}</p>

        <button
          onClick={() => quantity > 1 && dispatch(subtractItemQuantity(props))}
        >
          <RiArrowDownSFill className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
