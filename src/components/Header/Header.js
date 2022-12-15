import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import './Header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

export default function Header() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch()
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(term === "") return alert('Please enter the search term')
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('')
    }
    return (
        <div>
            <div className='headerWrapper'>
               
               <div className='logoArea'>
               <Link to="/">
                    <h2>CINEVALLEY</h2>
               </Link>
                   
               </div>

               <div className='search-form-area'>
                   <form onSubmit={onSubmitHandler}>
                       <input placeholder='Search movies or shows' 
                        type= 'text' value={term} onChange={(e)=> setTerm(e.target.value)}/>
                       <button type='submit'>
                           <i className='fas fa-search'></i>
                       </button>
                   </form>
               </div>
              
               {/* <div className='userIcon'>
                    <img src = {user} alt='user' />
               </div> */}
           </div>
        </div>
    )
}
