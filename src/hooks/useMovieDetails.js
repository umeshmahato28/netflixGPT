import { useDispatch } from "react-redux";
import { addMovieDetails } from '../utils/movieSlice';
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useMovieDetails = (movieId) =>{
    const dispatch = useDispatch();
    // fetch trailer videos && updating the store with trailer video data
    const getMovieDetails = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const details = json;
        // console.log(trailer);
        dispatch(addMovieDetails(details));
    };

    useEffect(()=>{
        window.scrollTo(0, 0)
        getMovieDetails();
    },[movieId]);
}

export default useMovieDetails;
