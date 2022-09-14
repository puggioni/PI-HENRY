import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, createVideogame } from "../../actions";

import Nav from "../Nav/Nav";
import s from "./createVideogame.module.css";

const CreateVideogame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const genres = useSelector((state) => state.genres);

  const platforms = useSelector((state) => state.platforms);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenre = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };
  const handlePlatform = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createVideogame(input));
    alert("Videogame created!");
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: [],
      genres: [],
    });
  };
  return (
    <div className={s.container}>
      <Nav />
      <h1>Crea tu videojuego!</h1>
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descripción</label>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Fecha de lanzamiento</label>
            <input
              type="date"
              name="released"
              value={input.released}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              value={input.rating}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Plataformas</label>
            <select
              name="platforms"
              value={input.platforms}
              onChange={handlePlatform}
            >
              {platforms.map((p) => (
                <option value={p.name}>{p.name}</option>
              ))}
            </select>
            <ul>
              {input.platforms.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <label>Géneros</label>
            <select name="genres" value={input.genres} onChange={handleGenre}>
              {genres.map((g) => (
                <option value={g.name}>{g.name}</option>
              ))}
            </select>
            <ul>
              {input.genres.map((g) => (
                <li>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <button type="submit">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVideogame;
