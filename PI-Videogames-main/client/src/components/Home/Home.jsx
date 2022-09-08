import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../../actions";
import s from "./home.module.css";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import VgCard from "../vgCard/vgCard";
function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.filtered);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  console.log(videogames);
  return (
    <div className={s.homeContainer}>
      <nav>
        <Link to="/videogame">Crear videojuego</Link>
      </nav>
      <h1> Henry Games</h1>
      <SearchBar />
      <Filters />
      <div className={s.vgContainer}>
        {videogames.length > 1 ? (
          videogames.map((g) => (
            <VgCard
              key={g.id}
              name={g.name}
              rating={g.rating}
              genres={g.genres}
              image={g.background_image}
              id={g.id}
            />
          ))
        ) : typeof videogames === "string" ? (
          <div>
            <img
              className="nonono"
              src="../../assets/notFound/404"
              alt="404"
            ></img>
          </div>
        ) : (
          <div className={s.loader}>
            <img
              className="loading"
              src="../../assets/loader/loader"
              alt=""
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
