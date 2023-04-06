import React, {useEffect, useState} from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import {AnimatePresence, motion} from "framer-motion";
import { Button } from '@mantine/core';

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3a6f40d889da2ced232b28e0ef24fef8&language=en-US&page=1"
    );
    const {results} = await api.json();
    setPopular(results);
    setFiltered(results);
  };

  return (
    // <div>
    //   <Filter
    //     filtered={filtered}
    //     setFiltered={setFiltered}
    //     activeGenre={activeGenre}
    //     setActiveGenre={setActiveGenre}
    //     popular={popular}
    //   />
    //   <motion.div layout>
    //     <AnimatePresence>
    //       <div className="flex justify-center flex-wrap gap-10 mt-20">
    //         {filtered.map(movie => {
    //           return <Movie key={movie.id} {...movie} />;
    //         })}
    //       </div>
    //     </AnimatePresence>
    //   </motion.div>
    // </div>

    <Button color="violet" size="md" className="bg-black">
      Settings
    </Button>
  );
};

export default App;
