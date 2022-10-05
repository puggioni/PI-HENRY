import React from "react";
import image from "../../assets/images/create-game-img.jpg";
import Nav from "../Nav/Nav";
import s from "./VideogameDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails, deleteVideogame } from "../../actions/index.js";
import { useNavigate } from "react-router-dom";

const VideogameDetail = () => {
  const navigate = useNavigate();
  const videogame = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);
  const handleClick = () => {
    dispatch(deleteVideogame(id));
    alert("Game deleted");
    navigate("/videogames");
  };
  return (
    <div className={s.container}>
      <Nav />
      <div className={s.outsideBorder}>
        <div className={s.infoContainer}>
          {/* =================IMAGE================= */}
          <div className={s.imgContainer}>
            {typeof videogame.id === "number" ? (
              <img src={videogame.background_image} alt="imagen" />
            ) : (
              <img src={image} alt="imagen" />
            )}
          </div>
          <div className={s.textContainer}>
            {/* =================TITLE================= */}
            <div className={s.titleContainer}>
              <h1>{videogame.name}</h1>
              <div className={s.btnContainer}>
                {typeof videogame.id === "number" ? null : (
                  <button onClick={handleClick} className={s.deleteBtn}>
                    Delete Game
                  </button>
                )}
                {typeof videogame.id === "number" ? null : (
                  <Link to={`/videogame/${videogame.id}/update`}>
                    <button className={s.updateBtn}>Update Game</button>
                  </Link>
                )}
              </div>
            </div>
            {/* =================GENRE================= */}
            <div className={s.dataContainer}>
              <h3>Genres : </h3>
              <p>{` ${videogame.genres}`}</p>
            </div>
            {/* =================PLATFORM================= */}
            <div className={s.dataContainer}>
              <h3>Platforms : </h3>
              <p>{` ${videogame.platforms}`}</p>
            </div>
            {/* =================RATING================= */}
            <div className={s.dataContainer}>
              <h3>Rating : </h3>
              <p>{videogame.rating}</p>
            </div>
            {/* =================RELEASED================= */}
            <div className={s.dataContainer}>
              <h3>Released :</h3>
              <p>{videogame.released}</p>
            </div>
            {/* =================DESCRIPTION================= */}
            <div className={s.dataContainer}>
              <p>{videogame.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideogameDetail;
