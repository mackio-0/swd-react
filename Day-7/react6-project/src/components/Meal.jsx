import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'

const Meal = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    

    const fetchData = async() => {
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const {meals} = await api.json();
        setMeals(meals);
        console.log(meals)
    };

  return (
    <div className='flex flex-wrap gap-10 mt-20 justify-center'>
      {meals.map(meal => {
        return (
          <MealCard key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />
        )
      })}
    </div>
  )
}

export default Meal
