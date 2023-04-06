import React from "react";
import {useSelector} from "react-redux";
import Cart from "./Cart";
import {Link} from "react-router-dom";

const AddToCart = () => {
  const {cartItems, totalAmount} = useSelector(state => state.cart);
  // console.log(cartItems)

  if (cartItems.length === 0) {
    return (
      <div className=" h-screen flex flex-col justify-center items-center">
        <h2>You don't have anything in the cart</h2>
        <Link to={"/"}>
          <button className=" bg-violet-600 text-white text-2xl font-bold px-5 py-1 mt-5 hover:bg-violet-700 transition-all duration-200 ease-linear">
            Fill it
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        {cartItems?.map(item => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr className=" mt-5 mb-2 border-2 border-gray-500 w-[80%] mx-auto"/>

      <div className=" flex px-40 py-2">
        <h2 className=" text-2xl font-semibold">Total</h2>
        <p className=" ml-auto text-lg">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddToCart;
