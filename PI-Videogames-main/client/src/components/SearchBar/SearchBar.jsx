import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchByName, getVideogames } from "../../actions/index";
import s from "./searchBar.module.css";
const Searchbar = () => {
  const [input, setInput] = useState({
    buscar: "",
  });
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchByName(input.buscar));
    setInput({
      buscar: "",
    });
  };

  const handleInput = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleShowAll = (e) => {
    dispatch(getVideogames());
    setInput({
      buscar: "",
    });
  };

  return (
    <div className={s.searchBarContainer}>
      <form onSubmit={handleSearch}>
        <input
          name="buscar"
          placeholder="Buscar Juego..."
          onChange={handleInput}
          value={input.buscar}
          autoComplete="off"
        />
        <button type="submit" className={s.searchButton}>
          Buscar
        </button>
        <button onClick={handleShowAll} className={s.searchButton}>
          Mostrar todos
        </button>
      </form>
    </div>
  );
};
export default Searchbar;
