import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {BsYoutube} from "react-icons/bs";

const Detail = () => {
  const {id} = useParams();
  const [meals, setMeals] = useState({});
  const [ingridients, setIngridients] = useState([]);
  const arrRef = useRef();

  useEffect(() => {
    fetchMealDetail();
    
  }, []);

  useEffect(() => {
    ingridientsData(meals);
  }, [])

  const ingridientsData = (meals) => {
    const ingridientArr = Object.keys(meals)
      .map((key) => meals[key])
      .slice(9,29)
      .filter(value => value !== '' && value !== null);
      console.log(ingridientArr)
      setIngridients(ingridientArr);
    // arrRef.current = ingridientArr;
  }

  const fetchMealDetail = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const {meals} = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };

  return (
    <div className=" flex w-[80%] mx-auto justify-center items-center h-screen gap-10">
      <img
        src={meals.strMealThumb}
        alt=""
        className=" h-[400px] object-cover"
      />
      <div>
        <h1 className=" text-4xl font-semibold text-gray-600 tracking-wide">
          {meals.strMeal}
        </h1>
        <h2 className=" text-2xl font-semibold text-gray-600 tracking-wide">
          {meals.strCategory}
        </h2>
        <h2 className=" text-2xl font-semibold text-gray-600 tracking-wide mb-5">
          {meals.strArea}
        </h2>
        <p className=" text-base font-medium text-gray-600 tracking-wide leading-8 mb-5">
          {meals.strInstructions}
        </p>
        <p className="text-center">
          <a href={meals.strYoutube} target="_blank" rel="noopener noreferrer">
            <BsYoutube className="text-4xl text-red-500 inline-block" />
          </a>
        </p>
        {ingridients.map(ingridi => {
          return ( <p>{ingridi}</p> )
        })}
      </div>
    </div>
  );
};

export default Detail;
