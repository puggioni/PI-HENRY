import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../actions";
import Nav from "../Nav/Nav";
import s from "./createVideogame.module.css";
import useForm from "./useForm";

export default function CreateVideogame() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const genres = useSelector((state) => state.genres);

  const platforms = useSelector((state) => state.platforms);

  const {
    input,
    errors,
    handleChange,
    handlePlatform,
    handleGenre,
    handleSubmit,
  } = useForm();
  return (
    <div className={s.container}>
      <Nav />

      <div className={s.outsideBorder}>
        <div className={s.formContainer}>
          {/*------------- TITTLE CONTAINER -------------*/}
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

                <label htmlFor={"name"} className={s.label}>
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
                <label htmlFor={"name"} className={s.label}>
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
                <label htmlFor={"name"} className={s.label}>
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

                  <ul>
                    {input.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.errorContainer}>
                <div className={s.error}>
                  {errors.platforms && (
                    <p className={s.content2}>{errors.platforms}</p>
                  )}
                </div>
                <div className={s.error}>
                  {errors.genres && (
                    <p className={s.content2}>{errors.genres}</p>
                  )}
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
