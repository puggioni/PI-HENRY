import React from "react";
import s from "./vgCard.module.css";
import { Link } from "react-router-dom";
const VgCard = (props) => {
  return (
    <div className={s.cardContainer}>
      <Link to={`/videogame/${props.id}`} className={s.link}>
        <h1 className={s.titleGame}>{props.name}</h1>
      </Link>
      <div className={s.gameImage}>
        {props.image ? (
          <img src={props.image} alt="imagen" />
        ) : (
          <img src="../../assets/cardImg/vgImg.jfif" alt="imagen" />
        )}
      </div>
      <div className={s.rating}>
        <p>Rating: {`${props.rating}`}</p>
      </div>
      <div className={s.genres}>
        <p>
          Genres:{" "}
          {`${
            typeof props.genres === "string"
              ? props.genres
              : props.genres.join(", ")
          }`}
        </p>
      </div>
    </div>
  );
};

export default VgCard;
