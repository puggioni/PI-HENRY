import React from "react";
import { Link } from "react-router-dom";
import s from "../css/landing.module.css";
const Landing = () => {
  return (
    <div className={s.landingContainer}>
      <h1>Welcome</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Landing;
