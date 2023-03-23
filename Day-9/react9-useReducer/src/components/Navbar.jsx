import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-around p-5 shadow-md">
      <h2 className=" text-3xl">Shop</h2>
      <div className="flex gap-5">
        <input type="text" className=" bg-black" />
        <div className=" relative">
          <AiOutlineShoppingCart className="text-3xl"/>
          <span className=" absolute bottom-5 left-5 w-5 h-5 flex items-center justify-center  bg-teal-400 text-white p-1 rounded-[100%]">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
