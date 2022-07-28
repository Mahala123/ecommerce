import React, { useCallback, useEffect, useState } from "react";
import Addmovies from "./Addmovies.js";
import { NavLink } from "react-router-dom";
import Movieslist from "./Movieslist";
import './Movies.css'


const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [loading, isloading] = useState(false);
  const [error, seterror] = useState(null);

  const Fetchmovieshandler = useCallback(async () => {
    isloading(true);
    seterror(null);
    try {
      const response = await fetch("https://login-b646d-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("something went wrong...retrying");
      }
      const data = await response.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
    }
      setmovies(loadedMovies);
    } catch (error) {
      seterror(error.message);
    }
    isloading(false);
  },[]);
  useEffect(() => {
    Fetchmovieshandler();
  }, [Fetchmovieshandler]);

  //console.log(movies);
  async function addMovieHandler(movie) {
    const response = await fetch('https://login-b646d-default-rtdb.firebaseio.com//movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    
  }
  const deleteHandler = async (id) => {
    
     const x=await fetch(`https://login-b646d-default-rtdb.firebaseio.com//movies/${id}.json`, {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(x);
    setmovies(movies.filter((movie) => movie.id !== id));
    console.log(movies);
  }

  return (
    <React.Fragment>
      <header>
        <ul className="header">
          <li>
            <NavLink  to="/">
              HOME
            </NavLink>
          </li>

          <NavLink to="/store">STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>
<Addmovies onAddMovie={addMovieHandler}></Addmovies>
      <ul className="container">
      
        <button onClick={Fetchmovieshandler}>FETCH MOVIES</button>
      </ul>
      <section>
        <div>
          <ul>

            {!loading && <Movieslist movies={movies} onDelete={deleteHandler}/>}
            {loading&&movies.length===0 && <ul style={{ color: "red" }}> loading movies...</ul>}
            {!loading && error && <p>{error}</p>}
            {!loading&&movies.length<=0&&<p>movies not found</p>}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Movies;
