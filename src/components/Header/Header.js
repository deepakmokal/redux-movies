import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../Images/user.png';
import './Header.scss'

export default function Header() {
    return (
        <div>
            <div className='headerWrapper'>
               <Link to="/">
               <div className='logoArea'>
                   <h2>Movie App</h2>
               </div>
               </Link>
               <div className='userIcon'>
                    <img src = {user} alt='user' />
               </div>
           </div>
        </div>
    )
}
