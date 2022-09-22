import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });
  const genres = useSelector((state) => state.genres);

  const platforms = useSelector((state) => state.platforms);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(
      validate({
        ...input,
        [name]: value,
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
    } else {
      alert("Please complete the form correctly");
    }
  };
  return (
    <div className={s.container}>
      <Nav />

      <div className={s.outsideBorder}>
        <div className={s.formContainer}>
          <div className={s.tittleContainer}>
            <h1>Ceate a Game</h1>
          </div>
          <div className={s.contentCreate}>
            <form className={s.createForm} onSubmit={handleSubmit}>
              {/*------------- NAME CONTAINER -------------*/}
              <div className={s.inputContainer}>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={input.name}
                  onChange={handleChange}
                  className={s.input}
                  required
                />

                <label for={"name"} className={s.label}>
                  <span className={s.content}>Name</span>
                </label>
                {errors.name ? (
                  <p className={s.content2}>{errors.name}</p>
                ) : null}
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
                {errors.rating && <p className={s.content2}>{errors.rating}</p>}
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
                {errors.description && (
                  <p className={s.content2}>{errors.description}</p>
                )}
                <label for={"name"} className={s.label}>
                  <span className={s.content}>Description</span>
                </label>
              </div>
              <div className={s.selectContainer}>
                {/*-------------DATE CONTAINER -------------*/}
                <div className={s.dateContainer}>
                  <label className={s.labelSelector}>
                    Fecha de lanzamiento
                  </label>
                  <input
                    type="date"
                    name="released"
                    value={input.released}
                    onChange={handleChange}
                    className={s.inputDate}
                  />
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
                  {errors.platforms && (
                    <p className={s.content2}>{errors.platforms}</p>
                  )}

                  <ul>
                    {input.platforms.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                {/*-------------GENRE CONTAINER -------------*/}
                <div className={s.dropdownContainer}>
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
                  {errors.genres && (
                    <p className={s.content2}>{errors.genres}</p>
                  )}
                  <ul>
                    {input.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.buttonContainer}>
                <button type="submit" className={s.btn}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
