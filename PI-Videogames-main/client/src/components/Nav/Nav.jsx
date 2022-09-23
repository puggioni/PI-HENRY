import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";
import music from "../../assets/music/music.mp3";
import ReactPlayer from "react-player";
const Nav = () => {
  return (
    <div className={s.container}>
      <Link to="/videogames" className={s.link}>
        <div className={s.tittleContainer}>
          {" "}
          <h1>
            <span>Henry</span>
            <br />
            <span>Games</span>
          </h1>
        </div>
      </Link>

      <ReactPlayer
        className={s.sound}
        url={music}
        playing={true}
        volume={0.005}
        controls={true}
        height="20px"
        width="200px"
      />

      <div className={s.homeButton}>
        <Link to="/videogame" className={s.linkHome}>
          Create Videogame
        </Link>
      </div>
    </div>
  );
};

export default Nav;
