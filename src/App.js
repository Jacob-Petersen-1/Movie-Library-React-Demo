import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='details/:title/' element={<MovieDetail />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
