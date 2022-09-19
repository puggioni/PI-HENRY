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
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(filterByGenre(e.target.value));
  };
  const handleSelect2 = (e) => {
    dispatch(orderBy(e.target.value));
  };
  const handleSelectr3 = (e) => {
    dispatch(filterByCreated(e.target.value));
  };
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  const genres = useSelector((state) => state.genres);

  return (
    <div className={s.filterContainer}>
      <Searchbar />
      <div className={s.selectorContainer}>
        <select className={s.filterSelector} onChange={handleSelect}>
          <option className={s.filterOption} value="Todos">
            Generos
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

        <select
          className={s.filterSelector}
          onChange={handleSelect2}
          name=""
          id=""
        >
          <option className={s.filterOption} value="default">
            Orden
          </option>

          <option className={s.filterOption} value="asc">
            Mayor a Menor
          </option>
          <option className={s.filterOption} value="desc">
            Menor a Mayor
          </option>

          <option className={s.filterOption} value="A-Z">
            A - Z
          </option>
          <option className={s.filterOption} value="Z-A">
            Z - A
          </option>
        </select>
        <select
          className={s.filterSelector}
          onChange={handleSelectr3}
          name=""
          id=""
        >
          <option className={s.filterOption} value="Todos">
            Origen
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
