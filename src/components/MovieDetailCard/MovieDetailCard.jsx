import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MovieDetailCard = ({ title }) => {
    const [movie, setMovie] = useState('');

    const fetchMovieData = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/movie/${title}/`
        );
        setMovie(response.data);
        console.log("Single Movie Data: ", response.data);
      } catch (error) {
        console.log("Seems to be an error here", error.message);
      }
    };
  
    useEffect(() => {
      fetchMovieData();
    }, []);


  return (
    <div>
    
      {movie.map((mov,index)=>{
        return(
        <div className="movie-title">
          <h1>{mov.title}</h1> <span>{mov.year}</span>
          <div className="poster-image">
            <img src={mov.poster_url} />
            <div className="movie-detail">{mov.plot}</div>
            <div className="movie-rating" />
            {mov.rating}
          </div>
        </div>

        )
      })

      }

      
     
        
      
      {console.log(movie)}
    </div>
  );
};

export default MovieDetailCard;
