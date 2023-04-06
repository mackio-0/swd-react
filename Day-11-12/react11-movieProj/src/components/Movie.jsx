import React from "react";
import { motion } from "framer-motion";

const Movie = ({title, backdrop_path}) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300/" + backdrop_path;

  return (
    <motion.div layout
      animate={{opacity: 1, scale: 1}}
      initial={{opacity: 0, scale: 1}}
      exit={{opacity: 1, scale: 0}}
      transition={{duration: 0.5}}
      className=" w-[300px] my-10 shadow-md p-1 rounded"
    >
      <div className=" h-[4rem] flex justify-center items-center text-center">
        <p className=" text-lg">{title}</p>
      </div>
      <img src={imageUrl} alt={title} className="rounded" />
    </motion.div>
  );
};

export default Movie;
