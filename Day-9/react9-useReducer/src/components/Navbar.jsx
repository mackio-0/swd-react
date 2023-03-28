import React, {useState} from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom";
import {StateContextCustom} from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: {cart},
  } = StateContextCustom();

  return (
    <div className=" flex items-center justify-around p-5 shadow-md">
      <Link to={"/"}>
        <h2 className=" text-3xl">Shop</h2>
      </Link>
      <div className="flex gap-5">
        <input
          type="text"
          className="outline-none border-b-2 border-b-gray-500 bg-transparent"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Link to={"/addtocart"}>
          <div className=" relative">
            <AiOutlineShoppingCart className="text-3xl" />
            <span className=" absolute bottom-5 left-5 w-5 h-5 flex items-center justify-center  bg-teal-400 text-white p-1 rounded-[100%]">
              {cart.length}
            </span>
          </div>  
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
