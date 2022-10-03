import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";

export default class Nav extends React.Component {
  render() {
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

        <div className={s.homeButton}>
          <Link to="/videogame" className={s.linkHome}>
            Create Videogame
          </Link>
        </div>
      </div>
    );
  }
}
