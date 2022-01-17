import React from 'react';
import { useSelector } from "react-redux";
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.scss';

export default function MovieList() {
    debugger;
    const movies = useSelector(getAllMovies)
    let renderedMovies = "";

      renderedMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie}  />
        })
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>

  
    )
    
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderedMovies}
                </div>
            </div>
           
        </div>
    )
}
