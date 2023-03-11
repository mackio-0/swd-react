import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/about'}>
        <button className="btn btn-primary">About</button>
      </Link>
      <Link to={'/contact'}>
      <button className="btn btn-primary">Contact</button>
      </Link>
    </div>
  );
};

export default Home;
