import React from "react";
import {Link} from "react-router-dom";

const Product = ({id, title, image, price}) => {
  return (
    <div className="">
      <div className=" w-72 rounded shadow p-7 bg-stone-100">
        <img
          src={image}
          className=" w-[200px] h-[200px] object-cover mx-auto mt-2 mb-3"
          alt=""
        />
        <div>
          <p>{title.substring(0, 25)}...</p>
          <p>{price}</p>
          <div className="flex justify-between item mt-4">
            <button className=" px-5 py-1 bg-teal-500 shadow rounded-sm text-white">
              Add to cart
            </button>
            <Link to={`/detail/${id}`}>
              <button className=" px-5 py-1 bg-teal-500 shadow rounded-sm text-white ">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
