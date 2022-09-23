import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../actions";
import { useState } from "react";
import s from "./home.module.css";
import loader from "../../assets/images/Loader.gif";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import VgCard from "../vgCard/vgCard";
import Nav from "../Nav/Nav";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  const videogames = useSelector((state) => state.filtered);

  /* ==================PAGINATION==================== */
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={s.homeContainer}>
      <Nav />
      <Filters />
      {/* ==============PAGINATION============== */}
      <Pagination
        totalVideogames={videogames.length}
        videogamesPerPage={videogamesPerPage}
        paginate={paginate}
      ></Pagination>
      {/* ==============CARD SECTION============== */}
      <div className={s.vgContainer}>
        {currentVideogames.length > 1 ? (
          currentVideogames.map((g) => (
            <VgCard
              key={g.id}
              name={g.name}
              rating={g.rating}
              genres={g.genres}
              image={g.background_image}
              id={g.id}
            />
          ))
        ) : (
          <div>
            <img className={s.notFound} src={loader} alt="notFoundImg"></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
