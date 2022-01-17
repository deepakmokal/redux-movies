import React, {useEffect} from 'react';
import { useDispatch } from "react-redux"; 
import MovieList from '../MovieList/MovieList';
import MovieAPI from '../../common/apis/MovieAPI';
import { APIKey } from '../../common/apis/MovieAPIKey';
import { addMovies } from '../../features/movies/movieSlice';
export default function Home() {
    const movieText = 'Harry'
    const dispatch = useDispatch()
    useEffect(() => {
        
        const movieFetch = async () => {
          const response = await MovieAPI
          .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
          .catch((error) => {
              console.log('Error ', error)
          })
          dispatch(addMovies(response.data))  
        }


        movieFetch();
    }, [])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    )
}
