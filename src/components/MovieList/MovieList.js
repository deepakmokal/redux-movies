import React from 'react';
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.scss';
import Slider from "react-slick";
import { settings } from '../../common/settings'
export default function MovieList() {
    
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderedMovies, renderedShows = "";

      renderedMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie}  />
        })
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    renderedShows = shows.Response === 'True' ? (
        shows.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie}  />
        })
    ) : (
        <div className="movies-error">
            <h3>{shows.Error}</h3>
        </div>
    )
    
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                <Slider {...settings}>
                     {renderedMovies}
                </Slider>
                   
                </div>
            </div>

            <div className='shows-list'>
                <h2>Shows</h2>
                <div className='shows-container'>
                <Slider {...settings}>
                     {renderedShows}
                </Slider>
                </div>
            </div>
           
        </div>
    )
}
