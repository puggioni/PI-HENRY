import React from "react";
import s from "./pnf.module.css";
import image from "../../assets/images/404-error.gif";
const PageNotFound = () => {
  return (
    <div className={s.container}>
      <div>
        <img src={image} alt="404-notfound"></img>
      </div>
    </div>
  );
};

export default PageNotFound;
