import React from "react";
import { Link } from "react-router-dom";
import s from "./landing.module.css";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Landing = () => {
  return (
    <div className={s.landingContainer}>
      <div className={s.textContainer}>
        <div>
          {" "}
          <h1>
            <span>PRESS</span>
            <br />
            <span>START</span>
          </h1>
        </div>

        <div className={s.iconContainer}>
          <Link to="/videogames">
            <AiOutlinePlayCircle className={s.playIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
