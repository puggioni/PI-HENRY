import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";
const Nav = () => {
  return (
    <div className={s.navHome}>
      <h1 className={s.homeTittle}> Henry Games</h1>
      <div className={s.homeButton}>
        <Link to="/videogame" className={s.linkHome}>
          Crear videojuego
        </Link>
      </div>
    </div>
  );
};

export default Nav;
