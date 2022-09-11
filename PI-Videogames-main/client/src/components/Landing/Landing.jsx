import React from "react";
import { Link } from "react-router-dom";
import s from "./landing.module.css";
const Landing = () => {
  return (
    <div className={s.landingContainer}>
      <h1>Welcome</h1>
      <Link to="/videogames">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Landing;
