import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {StateContextCustom} from "../context/StateContext";
import Cart from "./Cart";

const Addtocart = () => {
  const {
    state: {cart},
  } = StateContextCustom();

  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    setMainTotal(totalPrice);
  }, []);

  const addingToTotal = price => {
    setMainTotal(mainTotal + price)
  };

  const totalPrice = () => cart?.reduce((pv, cv) => pv + cv.price, 0);

  if (!(cart.length === 0)) {
    return (
      <div>
        <div className=" mt-10">
          {cart?.map(item => {
            return <Cart key={item.id} item={item} addingToTotal={addingToTotal}/>;
          })}
        </div>
        <hr className=" mx-auto w-[80%] text-slate-900 shadow" />
        <div className=" flex px-28 py-3 items-center">
          <h2 className=" mr-auto text-center w-[20%] text-lg font-semibold text-slate-500">
            Total
          </h2>
          <h2 className="text-lg font-semibold">
            {mainTotal}
          </h2>
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
