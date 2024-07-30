import { useDispatch } from "react-redux";
import { addMovieDetails } from '../utils/movieSlice';
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    const getMovieDetails = useCallback(async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US", API_OPTIONS);
        const json = await data.json();
        const details = json;
        dispatch(addMovieDetails(details));
    }, [dispatch, movieId]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getMovieDetails();
    }, [getMovieDetails]);

    // Note: You should return any cleanup function if needed
};

export default useMovieDetails;
