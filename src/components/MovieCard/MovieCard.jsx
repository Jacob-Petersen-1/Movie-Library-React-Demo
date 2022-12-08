import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom';



const MovieCard = ({movie}) => {
    
    return ( 
        <div className='movie-card-container'>
            <Link to={`details/${movie.title}/`}>
            <h1>{movie.title}</h1>
            <img className='movie-poster' src={movie.poster_url}/>
            </Link>
            
        </div>
     );
}
 
export default MovieCard;