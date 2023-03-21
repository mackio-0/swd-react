import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [item, setItem] = useState({})
  const {id} = useParams();

  useEffect(() => {
    fetchItem();
  }, [])

  const fetchItem = async() =>{
    const api = await fetch(`https://fakestoreapi.com/products/${id}`)
    const itemData = await api.json();
    setItem(itemData);
  }

  return (
    <div>
      {item.title}
    </div>
  )
}

export default Detail
