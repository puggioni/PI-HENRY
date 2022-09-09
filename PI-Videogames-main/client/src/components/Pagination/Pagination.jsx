import React from "react";
import { useState } from "react";
import s from "./pagination.module.css";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Pagination = ({ currentPage, setCurrentPage, maximumPages }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(input + 1);
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setInput(input - 1);
    setCurrentPage(currentPage - 1);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
    setCurrentPage(e.target.value);
  };
  return (
    <div className={s.paginationContainer}>
      <button onClick={prevPage} className={s.button}>
        <VscChevronLeft />
      </button>
      <input type="number" value={input} onChange={handleInput}></input>
      <p>de: {maximumPages}</p>
      <button onClick={nextPage} className={s.button}>
        <VscChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
