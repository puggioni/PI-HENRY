import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import s from "./pagination.module.css";

const Pagination = ({
  videogamesPerPage,
  totalVideogames,
  paginate,
  getNext,
  getPrevious,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={s.paginationContainer}>
        <AiOutlineArrowLeft className={s.icon} onClick={() => getPrevious()} />
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <AiOutlineArrowRight className={s.icon} onClick={() => getNext()} />
      </ul>
    </div>
  );
};

export default Pagination;
