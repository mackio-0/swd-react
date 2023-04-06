import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {StateContextCustom} from "../context/StateContext";
import Cart from "./Cart";

const Addtocart = () => {
  const {
    state: {cart},
    dispatch
  } = StateContextCustom()

  const [mainTotal, setMainTotal] = useState(0)

  useEffect(() => {
    setMainTotal(totalPrice)
  }, []);

  const addingToTotal = price => {
    setMainTotal(mainTotal + price)
  };

  const subtractTotal = price => {
    setMainTotal(prevMainTotal => prevMainTotal - price)
  }

  const clearCart = () => {
    const message = "Are you sure to remove everything from the Cart?"
    if(confirm(message)) {
      dispatch({type: "CLEAR_CART"})
    }
  }

  const totalPrice = () => cart?.reduce((pv, cv) => pv + cv.price, 0)

  if (!(cart.length === 0)) {
    return (
      <div>
        <div className=" mt-10">
          {cart?.map(item => {
            return (
              <Cart key={item.id} item={item} addingToTotal={addingToTotal} subtractTotal={subtractTotal} />
            );
          })}
        </div>

        <hr className=" mx-auto w-[90%] text-slate-900 shadow" />
        
        <div className=" flex px-28 py-3 items-center">
          <h2 className=" mr-auto text-center w-[20%] text-lg font-semibold text-slate-500">
            Total
          </h2>
          <h2 className="text-lg font-semibold">
            {mainTotal.toFixed(2)}
          </h2>
        </div>
        <div className=" flex justify-center mt-4">
          <button 
            className=" bg-rose-500 px-5 py-2 rounded shadow text-base font-semibold text-white"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex h-full justify-center">
        <div className=" my-auto text-center">
          <h3 className=" text-5xl text-gray-500 font-semibold">
            Your Cart is empty.
          </h3>
          <Link to={"/"}>
            <button className="px-10 py-2 mt-10 bg-teal-500 rounded text-white shadow">
              Fill it
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Addtocart;
