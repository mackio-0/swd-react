import React from "react";
import {Link} from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Link to={"/"}>
        <button className="btn btn-primary">Home</button>
      </Link>
      <Link to={'/about'}>
        <button className="btn btn-primary">About</button>
      </Link>
    </div>
  );
};

export default Contact;
