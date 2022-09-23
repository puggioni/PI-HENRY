import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCreated,
  filterByGenre,
  getGenres,
  orderBy,
} from "../../actions";
import Searchbar from "../SearchBar/SearchBar";
import s from "./filters.module.css";

const Filters = () => {
  /* ---------------HANDLERS--------------- */
  const handleSelect = (e) => {
    dispatch(filterByGenre(e.target.value));
  };
  const handleSelect2 = (e) => {
    dispatch(orderBy(e.target.value));
  };
  const handleSelectr3 = (e) => {
    dispatch(filterByCreated(e.target.value));
  };

  /* ---------------GENEROS--------------- */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  const genres = useSelector((state) => state.genres);

  return (
    <div className={s.filterContainer}>
      <Searchbar />
      <div className={s.selectorContainer}>
        {/* ===================GENRE SELECTOR=================== */}
        <select className={s.filterSelector} onChange={handleSelect}>
          <option className={s.filterOption} value="Todos">
            Genres
          </option>

          {genres &&
            genres.map((g) => {
              return (
                <option key={g.id} value={g.name} className={s.filterOption}>
                  {g.name}
                </option>
              );
            })}
        </select>
        {/* ===================ORDER BY=================== */}
        <select
          className={s.filterSelector}
          onChange={handleSelect2}
          name=""
          id=""
        >
          <option className={s.filterOption} value="default">
            Order
          </option>

          <option className={s.filterOption} value="asc">
            asc
          </option>
          <option className={s.filterOption} value="desc">
            desc
          </option>

          <option className={s.filterOption} value="A-Z">
            A - Z
          </option>
          <option className={s.filterOption} value="Z-A">
            Z - A
          </option>
        </select>
        {/* ===================CREATED=================== */}
        <select
          className={s.filterSelector}
          onChange={handleSelectr3}
          name=""
          id=""
        >
          <option className={s.filterOption} value="Todos">
            Created...
          </option>
          <option className={s.filterOption} value="API">
            API
          </option>
          <option className={s.filterOption} value="DB">
            DB
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
