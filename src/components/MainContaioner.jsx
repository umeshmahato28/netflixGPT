import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  // const mainMovie = movies[1];
  const mainMovie = movies[(Math.floor(Math.random() * movies.length))];

  // console.log(mainMovie);
  
  const {original_title, overview, id} =mainMovie
  return (
    <div className="relative md:pt-0 pt-[28%] bg-black">
    
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId ={id} />
    </div>
  );
};

export default MainContainer;
