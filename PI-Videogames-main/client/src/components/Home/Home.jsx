import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../../actions";
import s from "./home.module.css";
import Filters from "../Filters/Filters";
import VgCard from "../vgCard/vgCard";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.filtered);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  const maximumPages = Math.ceil(videogames.length / videogamesPerPage);
  return (
    <div className={s.homeContainer}>
      <nav className={s.navHome}>
        <h1 className={s.homeTittle}> Henry Games</h1>
        <div className={s.homeButton}>
          <Link to="/videogame" className={s.linkHome}>
            Crear videojuego
          </Link>
        </div>
      </nav>
      <div className={s.homeFiltersContainer}>
        <Filters />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        videogamesPerPage={videogamesPerPage}
        maximumPages={maximumPages}
      ></Pagination>

      <div className={s.vgContainer}>
        {currentVideogames.length &&
          currentVideogames.map((g) => (
            <VgCard
              key={g.id}
              name={g.name}
              rating={g.rating}
              genres={g.genres}
              image={g.background_image}
              id={g.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
