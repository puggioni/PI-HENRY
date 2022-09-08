import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchByName, getVideogames } from "../../actions/index";

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
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Burscar..." onChange={handleInput} />
        <button type="submit">Buscar</button>
        <button onClick={handleShowAll}>Mostrar todos</button>
      </form>
    </div>
  );
};
export default Searchbar;
