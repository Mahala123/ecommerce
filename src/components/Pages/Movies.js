import React, { useCallback, useEffect, useState } from "react";
import Addmovies from "./Addmovies.js";
import { NavLink } from "react-router-dom";
import Movieslist from "./Movieslist";
import "./Movies.css";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [loading, isloading] = useState(false);
  const [error, seterror] = useState(null);

  const Fetchmovieshandler = useCallback(async () => { 
   
    isloading(true);
    seterror(null);
    try {
      const response = await fetch("https://newecommerce-ad44d-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error('Something went wrong ....Retrying');
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
    }, [])
  useEffect(() => {
    Fetchmovieshandler();
  }, [Fetchmovieshandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://newecommerce-ad44d-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  const deleteHandler = async (id) => {
    const x = await fetch(
      `https://newecommerce-ad44d-default-rtdb.firebaseio.com/${id}movies.json`,
      {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(x);
    setmovies(movies.filter((movie) => movie.id !== id));
    console.log(movies);
  };

  return (
    <React.Fragment>
    <div>
      <header className="center">
        <ul className="header">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <NavLink to="/store">STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">CONTACT US</NavLink>
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
      </div>
      <section>
        <div className="container">
          <ul>
            {!loading && (
              <Movieslist movies={movies} onDelete={deleteHandler} />
            )}
            {loading && movies.length === 0 &&  (
              <ul style={{ color: "black" }}> loading movies...</ul>
            )}
            {!loading && error && <p >{error}</p>}<br/>
            {!loading && movies.length <= 0 && !error && <p>movies not found</p>}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Movies;
