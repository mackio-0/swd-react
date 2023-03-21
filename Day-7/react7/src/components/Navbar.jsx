import React, {useState} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";

const Navbar = ({setItems, items, copydata}) => {
  const [search, setSearch] = useState("");

  const submitHandler = e => {
    e.preventDefault();

    console.log(search);
    console.log(search.length);
    if (search.length === 0 || search === "") {
      setItems(copydata);
    } else if (search.length > 0) {
      const filterdPd = items.filter(item =>
        item.title.toLowerCase().includes(search)
      );
      setItems(filterdPd);
    }
  };

  return (
    <div>
      <div className="flex p-7 rounded shadow-lg justify-around items-center bg-teal-500">
        <Link to={"/"}>
          <h2 className=" text-stone-50 text-2xl font-bold">Comfity</h2>
        </Link>
        <form action="" onSubmit={submitHandler}>
          <input
            value={search}
            type="text"
            className=" outline-none bg-transparent border-b-2 border-b-gray-600"
            onChange={e => setSearch(e.target.value.toLowerCase())}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
