import React, { useRef } from "react";
import {model} from '../utils/geminiai'
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
// Search Movie Api call
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    return json.results;
  };
  const handleGptSearchClick = async () => {

    //  console.log(searchText.current.value);
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

 
    const result = await model.generateContent(gptQuery);
    const response = result.response;
    const text = response?.candidates[0]?.content?.parts[0].text;
// console.log(text);
    // console.log(result);
    if (!text) {
      alert("No movies found!");
    }

    const gptMovies = text.split(", ");

    const promiseArray = gptMovies.map(async (movie) =>
      searchMoviesTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
// console.log(tmdbResults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );

  }

      return (
    <div className="md:pt-[15%] pt-[40%] flex justify-center items-center ">
      <form
        className="md:w-2/3 w-full grid grid-cols-12 gap-x-2  p-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
        ref ={searchText}
          type="text"
          placeholder="What would you like to watch today?? "
          className="py-3 px-5 col-span-9 rounded-lg shadow-2xl"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-600 rounded-lg  text-white col-span-3 "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
