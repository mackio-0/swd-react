import { data } from "autoprefixer"
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  const [items, setItems] = useState([]);
  const [copydata, setcopydata] = useState([])

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setcopydata(data);
    setItems(data);
  };

  return (
    <div>
      <Navbar setItems={setItems} items={items}  copydata={copydata} />
      <Routes>
        <Route path="/" element={<Products items={items} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
