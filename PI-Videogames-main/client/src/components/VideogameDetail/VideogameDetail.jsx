import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetails } from "../../actions/index.js";
import Nav from "../Nav/Nav";
import s from "./VideogameDetail.module.css";
const VideogameDetail = (props) => {
  useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Nav />
    </div>
  );
};

export default VideogameDetail;
