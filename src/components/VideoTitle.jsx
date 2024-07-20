import React from "react";
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
const VideoTitle = ({ title, overview }) => {
  return (
    <>

    <div className="w-full aspect-video md:pt-[20%] md:px-20 absolute gap-y-4 pt-[40%] px-10 text-white bg-gradient-to-tr from-black">
      <div className="">
        <h1 className="font-bold md:text-5xl md:m-2 text-2xl mt-16  ">{title}</h1>
        <p className=" hidden  md:block  md:w-3/4 lg:w-1/3 text-lg py-3 m-2">{overview} </p>
      </div>
      <div className="flex gap-3 pb-3 lg:m-2 ">
        <button className="bg-white md:rounded-lg rounded-md text-black flex items-center justify-center gap-x-1  h-8 w-16  md:h-10 md:w-28 hover:bg-white/70">
          <FaPlay /> PLay
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 flex items-center justify-center gap-x-1  md:rounded-lg rounded-md  text-white    h-8 w-24  md:h-10 md:w-28">
          <FiInfo/> More Info
        </button>
      </div>
    </div>
    
    </>
  );
};

export default VideoTitle;
