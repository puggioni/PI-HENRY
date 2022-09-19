import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getVideogames, searchByName } from "../../actions/index";
import s from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = () => {
  const [name, setname] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(name));
    console.log(name);
  };

  const handlename = (e) => {
    e.preventDefault();
    setname(e.target.value);
    console.log(e.target.value);
  };
  const showAll = (e) => {
    e.preventDefault();
    dispatch(getVideogames());
  };
  return (
    <div className={s.searchBarContainer}>
      <form>
        <input
          name="name"
          placeholder="Buscar Juego..."
          onChange={(e) => handlename(e)}
          value={name}
          autoComplete="off"
        />
        <button
          type="submit"
          className={s.searchButton}
          onClick={(e) => handleSearch(e)}
        >
          <AiOutlineSearch />
        </button>
        <button className={s.searchButton} onClick={(e) => showAll(e)}>
          Mostrar Todos
        </button>
      </form>
    </div>
  );
};
export default Searchbar;
