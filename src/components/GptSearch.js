import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BG, LOGIN_MOBILE_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed w-full -z-10">
        <img className="h-screen w-full object-cover" src={LOGIN_BG} alt="bg" />
        {/* <img className="w-full md:hidden block" src={LOGIN_MOBILE_BG} alt="bg" /> */}
      </div>
      <GptSearchBar />
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
