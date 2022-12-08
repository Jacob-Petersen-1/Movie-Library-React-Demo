
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Component imports

import Feed from '../components/Feed/Feed';




const HomePage = () => {

    const [movieData, setMovieData] = useState([])

    const getMovieData = async () => {
      try{
        let response = await axios.get("http://127.0.0.1:8000/api/movie/");
        console.log("Movie Data: ", response.data)
        setMovieData(response.data)
      } catch (error){
        console.log("There seems to be a problem with the request")
      }
    }
    return ( 
        <>
        <button onClick={getMovieData}> Get Movies</button>
        <Feed movies={movieData}/>
        </>
     );
}
 
export default HomePage;