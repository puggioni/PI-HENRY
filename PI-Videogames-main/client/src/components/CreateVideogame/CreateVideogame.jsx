import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, createVideogame } from "../../actions";

import Nav from "../Nav/Nav";
import s from "./createVideogame.module.css";
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "El juego debe tener un nombre";
  }

  if (!input.description) {
    errors.description = "El juego debe tener alguna descripcion";
  }

  if (input.description.length > 250) {
    errors.description = "La descripcion debe tener menos de 250 caracteres";
  }
  if (!input.released) {
    errors.released = "El juego debe tener una fecha de lanzamiento";
  }

  if (!input.rating) {
    errors.rating = "El juego debe tener un rating";
  }
  if (
    !/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) ||
    input.rating < 0 ||
    input.rating > 5
  ) {
    errors.rating = "El rating debe ser un numero entre 0 y 5";
  }
  if (!input.platforms) {
    errors.platforms = "El juego debe tener una plataforma";
  }
  if (!input.genres) {
    errors.genres = "El juego debe tener un genero";
  }
  return errors;
}
export default function CreateVideogame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const [errors, setErrors] = useState({});

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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleGenre = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        genres: [...input.genres, e.target.value],
      })
    );
  };
  const handlePlatform = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        platforms: [...input.platforms, e.target.value],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
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
      navigate("/videogames");
    } else {
      alert("Please complete the form correctly");
    }
  };
  return (
    <div className={s.container}>
      <Nav />
      <h1>Crea tu videojuego!</h1>
      <div className={s.outsideBorder}>
        <div className={s.formContainer}>
          <div className={s.contentCreate}>
            <form className={s.createForm} onSubmit={handleSubmit}>
              {/*------------- NAME CONTAINER -------------*/}
              <div className={s.inputContainer}>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  required
                  value={input.name}
                  onChange={handleChange}
                  className={s.input}
                />
                <label for={"name"} className={s.label}>
                  <span className={s.content}>Name</span>
                </label>
              </div>

              {/*-------------RATING CONTAINER -------------*/}
              <div className={s.inputContainer}>
                <input
                  type="number"
                  name="rating"
                  autoComplete="off"
                  value={input.rating}
                  onChange={handleChange}
                  className={s.input}
                  required
                />

                <label for={"name"} className={s.label}>
                  <span className={s.content}>Rating</span>
                </label>
              </div>
              {/*------------- DESCRIPTION CONTAINER-------------*/}
              <div className={s.inputContainerArea}>
                <textarea
                  type="text"
                  name="description"
                  autoComplete="off"
                  value={input.description}
                  onChange={handleChange}
                  className={s.input}
                  required
                />
                <label for={"name"} className={s.label}>
                  <span className={s.content}>Description</span>
                </label>
              </div>
              <div className={s.selectContainer}>
                {/*-------------DATE CONTAINER -------------*/}
                <div>
                  <label>Fecha de lanzamiento</label>
                  <input
                    type="date"
                    name="released"
                    value={input.released}
                    onChange={handleChange}
                  />
                  {errors.released && (
                    <p className={s.errors}>{errors.released}</p>
                  )}
                </div>
                {/*-------------PLATFORM CONTAINER -------------*/}
                <div>
                  <label className={s.labelSelector}>Platforms</label>
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
                {/*-------------GENRE CONTAINER -------------*/}
                <div>
                  <label className={s.labelSelector}>Genres</label>
                  <select
                    name="genres"
                    value={input.genres}
                    onChange={handleGenre}
                  >
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
              </div>

              <button type="submit" className={s.btn}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
