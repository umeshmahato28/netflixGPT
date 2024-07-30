import { useDispatch } from "react-redux";
import { addRecommendedMovies } from '../utils/movieSlice';
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useRecommendationMovie = (movieId) => {
    const dispatch = useDispatch();

    const getRecommendedMovie = useCallback(async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        const recommendedMovie = json.results;
        dispatch(addRecommendedMovies(recommendedMovie));
    }, [dispatch, movieId]);

    useEffect(() => {
        getRecommendedMovie();
    }, [getRecommendedMovie]);

    // Note: You should return any cleanup function if needed
};

export default useRecommendationMovie;
