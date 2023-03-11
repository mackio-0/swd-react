import React from "react";
import {Link, NavLink} from "react-router-dom";


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to={'/'}>
        <button className="btn btn-primary">Home</button>
      </Link>
      <NavLink to={'/contact'}>
        <button className="btn btn-primary">Contact</button>
      </NavLink>
    </div>
  );
};

export default About;
