import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard/MovieDetailCard";

const MovieDetail = () => {
const {title} = useParams()

  return (
    <>
    <h1>Movie Detail Page</h1>
      <MovieDetailCard title={title} />
    </>
  );
};

export default MovieDetail;
