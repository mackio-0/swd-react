import React, {useState} from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Products from './components/Products'


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Products />
    </div>
  );
};

export default App;
