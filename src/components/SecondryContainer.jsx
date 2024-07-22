import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <>
      <div className="scrollbar-hide  bg-black pb-10">
        <div className="md:-mt-[25%]  pt-[15%] lg:pl-12  relative z-36">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    </>
  );
};

export default SecondryContainer;
