import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from './MealCard';

const Search = () => {

  const {name} = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchSearch();
    // console.log(items)
  }, [])

  const fetchSearch = async() => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const {meals} = await api.json();
    // console.log(meals);
    setItems(meals);
  }

  return (
    <div className='flex flex-wrap gap-10 mt-20 justify-center'>
      {items.map(item => <MealCard key={item.idMeal} id={item.idMeal} name={item.strMeal} image={item.strMealThumb} />)}
    </div>
  )
}

export default Search
