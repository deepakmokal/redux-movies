import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import MovieAPI from '../../common/apis/MovieAPI';
import { APIKey } from '../../common/apis/MovieAPIKey';

const initialState = {
    movies: {}, 
    shows: {},
    selectedMovieOrShow: {},
   
};

//Fetching Movies
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
async (term) => {
    
    const response = await MovieAPI
          .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
           return response.data
})

//Fetching Shows
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', 
async (term) => {
    
    const response = await MovieAPI
          .get(`?apiKey=${APIKey}&s=${term}&type=series`)
           return response.data
})

export const fetchAsyncSelectedMovieOrShow = createAsyncThunk('movies/fetchAsyncSelectedMovieOrShow', 
async (id) => {
    
    const response = await MovieAPI
          .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
           return response.data
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      
    removeSelectedMovieOrShow: (state) => {
        state.selectedMovieOrShow = {} 
    }
},
extraReducers: {
    [fetchAsyncMovies.pending]: () => {
        console.log('Pending');
       
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log('Fullfilled');
        return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected]: () => {
        console.log('Rejected');
    },

    [fetchAsyncShows.fulfilled]: (state, {payload}) => {
        console.log('Fullfilled');
        return {...state, shows: payload}
    },
    [fetchAsyncSelectedMovieOrShow.fulfilled]: (state, {payload}) => {
        console.log('Fullfilled');
        return {...state, selectedMovieOrShow: payload}
    },
}
})

export default movieSlice.reducer
export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShow = (state) => state.movies.selectedMovieOrShow;
