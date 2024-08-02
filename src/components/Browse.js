import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContaioner"; // Corrected the typo in the import
import SecondaryContainer from "./SecondryContainer"; // Corrected the typo in the import
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

import useLoader from '../hooks/useLoader';
import Shimmer from "./Shimmer";

const Browse = () => {
  const loading = useLoader(3000);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black min-h-screen relative z-10">
      <Header />
      {loading ? (
        <Shimmer />
      ) : showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
         
        </>
      )}
    </div>
  );
};

export default Browse;
