import React from "react";
import {Input} from "@mantine/core";
import {Badge} from "@mantine/core";
import {BsSearch, BsFillHandbagFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
  const {cartItems} = useSelector(state => state.cart);

  return (
    <div className=" flex justify-around p-5 shadow-lg">
      <Link to={"/"}>
        <h2 className=" text-3xl text-purple-800 hover:text-purple-600 transition-all duration-300 ease-in-out">
          AphayZon
        </h2>
      </Link>
      <Link to={"/addtocart"}>
        <div className=" flex gap-5">
          <Input icon={<BsSearch />} variant="filled" placeholder="Search" />
          <div className=" relative">
            <Badge color="violet" className="absolute bottom-5 left-6">
              {cartItems.length}
            </Badge>
            <BsFillHandbagFill className=" text-3xl text-violet-700" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
