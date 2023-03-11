import React, {useEffect, useState} from "react";
import "./App.css";
import Card from "./Card";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Route, Routes} from "react-router-dom";

const App = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetchItem();
  // }, []);
  
  // const fetchItem = async () => {
  //   const api = await fetch("https://fakestoreapi.com/products");
  //   const data = await api.json();
  //   // console.log(data);
  //   setItems(data);
  // };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App;
