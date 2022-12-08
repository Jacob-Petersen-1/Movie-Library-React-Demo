import React from 'react';
import './MovieCard.css'


const MovieCard = ({movie}) => {
    
    return ( 
        <div className='movie-card-container'>
            {console.log("Movie Image", movie.poster_url)}
            <h1>{movie.title}</h1>
            <img className='movie-poster' src={movie.poster_url}/>
            
        </div>
     );
}
 
export default MovieCard;