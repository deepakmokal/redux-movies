import React, {useEffect} from 'react';
import { useDispatch } from "react-redux"; 
import MovieList from '../MovieList/MovieList';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export default function Home() {
    
    const dispatch = useDispatch()
    const movieText = 'Marvel';
    const seriesText = 'Anime'
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(seriesText))
    
    }, [dispatch])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    )
}
