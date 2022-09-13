import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails } from "../../actions/index.js";
import Nav from "../Nav/Nav";
import s from "./VideogameDetail.module.css";
const VideogameDetail = () => {
  const videogame = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Nav />
      <div className={s.infoContainer}>
        <div className={s.imgContainer}>
          <img src={videogame.background_image} alt="videogame" />
        </div>
        <div className={s.textContainer}>
          <h1>{videogame.name}</h1>
          <div>
            <h3>Genres :</h3>
            <p>{`${videogame.genres}`}</p>
          </div>
          <div>
            <h3>Platforms:</h3>
            <p>{`${videogame.platforms}`}</p>
          </div>
          <h3>Rating: {videogame.rating}</h3>
          <h3>Released: {videogame.released}</h3>
          <h3>Description:</h3>
          <p>{videogame.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideogameDetail;
