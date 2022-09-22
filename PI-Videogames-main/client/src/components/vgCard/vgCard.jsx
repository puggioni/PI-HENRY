import React from "react";
import s from "./vgCard.module.css";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiFillStar } from "react-icons/ai";
import image from "../../assets/images/create-game-img.jpg";
const VgCard = (props) => {
  return (
    <div className={s.outSideBorder}>
      <div className={s.container}>
        <div className={s.image}>
          <Link to={`/videogame/${props.id}`}>
            {props.image ? (
              <img src={props.image} alt="imagen" />
            ) : (
              <img src={image} alt="imagen" />
            )}
          </Link>
        </div>
        <div className={s.bottomSide}>
          <div className={s.tittle}>
            <h4>{props.name}</h4>
          </div>
          <div className={s.genres}>
            <p>
              Genres:{" "}
              {`${
                typeof props.genres === "string" ? props.genres : props.genres
              }`}
            </p>
          </div>

          <div className={s.rating}>
            <AiFillStar className={s.icon} />
            <p>{props.rating}</p>
          </div>

          <Link to={`/videogame/${props.id}`}>
            <AiOutlineInfoCircle className={s.info} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VgCard;
