import React, {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const Cart = ({item, addingToTotal}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
    addingToTotal(item.price);
  };
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPriceOfAnItem = item.price * quantity;

  return (
    <div className=" flex px-28 py-5 items-center mt-5">
      <div className=" flex items-center gap-7">
        <img
          src={item.image}
          className=" min-w-[100px] max-h-[100px] object-contain"
        />
        <div className=" w-[100%]">
          <p className=" text-gray-500 font-semibold">
            {item.title.length > 35
              ? item.title.substring(0, 35) + "..."
              : item.title}
          </p>
          <p className="my-2">${totalPriceOfAnItem.toFixed(2)}</p>
          <p className="text-white cursor-pointer bg-rose-500 text-center w-24 py-1 px-1 rounded">
            Remove
          </p>
        </div>
      </div>
      <div className="ml-auto flex flex-col items-center">
        <p className=" cursor-pointer text-2xl" onClick={increaseQty}>
          <IoIosArrowUp />
        </p>
        <p>{quantity <= 0 ? "0" : quantity}</p>
        <p className=" cursor-pointer text-2xl" onClick={decreaseQty}>
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
