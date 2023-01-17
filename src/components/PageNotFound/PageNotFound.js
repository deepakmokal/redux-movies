import React from 'react'
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div>
            <div class="flex-container">
                <div class="text-center">
                    <h1>
                        <span class="fade-in" id="digit1">4</span>
                        <span class="fade-in" id="digit2">0</span>
                        <span class="fade-in" id="digit3">4</span>
                    </h1>
                    <h3 class="fadeIn">PAGE NOT FOUND</h3>
                    <a className='return-home' >
                    <Link to="/">
                        Return to Home
                    </Link>
            </a>
                </div>
            </div>
        </div>
    )
}
