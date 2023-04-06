import React, {useEffect} from "react";
import { motion } from "framer-motion";
const Filter = ({
  filtered,
  setFiltered,
  activeGenre,
  setActiveGenre,
  popular,
}) => {
  // const allClickHandle = () => {
  //   setActiveGenre(0);
  //   setFiltered(popular);
  // };

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filteredMovie = popular.filter(movie =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filteredMovie);
  }, [activeGenre]);

  return (
    <div className="ml-28 my-10 flex gap-5">
      <button
        className=" bg-gray-700 text-white rounded px-6 py-1 shadow"
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className=" bg-gray-700 text-white rounded px-6 py-1 shadow"
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className=" bg-gray-700 text-white rounded px-6 py-1 shadow"
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
    </div>
  );
};

export default Filter;
