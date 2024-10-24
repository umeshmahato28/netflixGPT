import React from "react";
import "../index.css";
import CastsCard from "./CastsCard";
const Casts = ({ title, peoples }) => {
  return (
    <div className="px-6 mt-5 pt-28   ">
      <h1 className="text-lg md:text-2xl font-semibold py-2  text-white">
        {title}
      </h1>
      <div className="w-full">
        <div className="movieList flex overflow-x-scroll gap-x-4">
          {peoples?.map((people) => (
            <CastsCard
              key={people.id}
              posterPath={people.profile_path}
              name={people.original_name}
              character={people.character}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casts;
