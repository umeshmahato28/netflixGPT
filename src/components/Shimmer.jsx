// Shimmer.jsx
import React from 'react';

const Shimmer = () => {
//   const cardArray = new Array(9).fill(0);

  return (
    <div className=" ">
      {/* Full-width card with aspect-video */}
      <div className="mb-8 w-full aspect-video bg-zinc-950 rounded-lg relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent animate-shimmer z-10"></div>
        <div className="pl-24 relative animate-pulse duration-200 z-20">
          <div className=" pl-12 w-64 h-20 bg-zinc-700 rounded-lg mb-4"></div>
          <div className=" pl-12 w-[150%] h-60 bg-zinc-700 rounded-lg"></div>
        </div>
      </div>

      {/* <div className="mb-8">
        <h2 className="text-3xl text-white mb-4">Now Playing</h2>
        <div className="flex space-x-4">
          {cardArray.map((_, i) => (
            <div key={i} className="w-36 h-56 bg-zinc-950 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent animate-shimmer"></div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Shimmer;
