import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail"
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
