import React from "react";
import {BiDetail, BiSearchAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import "./MealCard.css";
const MealCard = ({name, image, id}) => {
  return (
    <div className=" parent relative">
      <div className=" img-div">
        <img
          className=" image h-[300px] object-cover rounded-sm"
          src={image}
          alt=""
        />
      </div>

      <Link to={`/detail/${id}`}>
        <div className=" icon absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%]">
          <p className=" flex justify-center items-center h-12 w-12 bg-orange-400 rounded-[100%] ">
            <BiDetail className=" text-3xl  text-gray-600 " />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
