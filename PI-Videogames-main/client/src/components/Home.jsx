import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getVideogames } from "../actions";
import s from "../css/home.module.css";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div className={s.homeContainer}>
      <nav>
        <Link to="/videogame">Crear videojuego</Link>
      </nav>
      <h1> Henry Games</h1>
      <SearchBar />
      <Filters />
      <div>
        {videogames.map((v) => () => {
          return (
            <div>
              <h3>{v.name}</h3>
              <img src={v.image} alt={v.name} />
              <p>{v.description}</p>
              <NavLink to={`/videogame/${v.id}`}>Detalles</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
