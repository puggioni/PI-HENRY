import React from "react";
import { useState } from "react";

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
    <div>
      <button onClick={prevPage}>Prev</button>
      <input type="number" value={input} onChange={handleInput}></input>
      <p>de: {maximumPages}</p>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
