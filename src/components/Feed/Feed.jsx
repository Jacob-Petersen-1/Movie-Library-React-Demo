import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


const Feed = ({movies}) => {
    return ( 
        <>
        {movies.map((movie) => {
            return(
                <MovieCard movie = {movie}/>
            )
        })}
        </>
     );
}
 
export default Feed;