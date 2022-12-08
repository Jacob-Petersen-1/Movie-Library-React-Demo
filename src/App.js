import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [movieData, setMovieData] = useState([])

  const getMovieData = async () => {
    try{
      let response = await axios.get("http://127.0.0.1:8000/api/movie/");
      console.log("Movie Data: ", response.data)
    } catch (error){
      console.log("There seems to be a problem with the request")
    }
  }


  return (
    <>
      <NavBar/>
      <button onClick={getMovieData}>Click Here</button>
      <Footer/>
    </>
  );
}

export default App;
