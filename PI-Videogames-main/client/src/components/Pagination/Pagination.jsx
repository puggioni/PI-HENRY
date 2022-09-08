import React from "react";

const Pagination = ({ charactersPerPage, allCharacters, paginado }) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.length &&
          pageNumbers.map((number) => () => {
            return (
              <li key={number}>
                <a onClick={() => paginado(number)} href>
                  {number}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pagination;
