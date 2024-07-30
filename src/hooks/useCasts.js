import { useDispatch } from "react-redux";
import { addCasts } from '../utils/movieSlice';
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useCasts = (movieId) => {
    const dispatch = useDispatch();

    const getCasts = useCallback(async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=en-US", API_OPTIONS);
        const json = await data.json();
        const casts = json.cast;
        dispatch(addCasts(casts));
    }, [dispatch, movieId]);

    useEffect(() => {
        getCasts();
    }, [getCasts]);

    // Note: You should return any cleanup function if needed
};

export default useCasts;
