import React, {useState} from "react";
import {BiSearchAlt} from "react-icons/bi";
import {GiKnifeFork} from "react-icons/gi";
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    nav(`/search/${search}`);
  }

  return (
    <div className=" flex justify-around p-5 shadow-lg rounded">
      <Link to={"/"}>
        <GiKnifeFork className=" text-3xl" />
      </Link>
      <div className=" flex items-stretch">
        <form action="" className=" flex" onSubmit={e => submitHandler(e)}>
          <input
            type="text"
            className="outline-none border border-black"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <div className=" flex bg-slate-700 px-3 items-center">
          <BiSearchAlt className=" text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
