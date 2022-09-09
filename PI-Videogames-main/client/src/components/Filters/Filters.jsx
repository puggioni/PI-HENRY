import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre, getGenres, orderBy } from "../../actions";
import s from "./filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(filterByGenre(e.target.value));
  };
  const handleSelect2 = (e) => {
    dispatch(orderBy(e.target.value));
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  const genres = useSelector((state) => state.genres);

  return (
    <div className={s.filterContainer}>
      <select className={s.filterSelector} onChange={handleSelect}>
        <optgroup className={s.filterOptionGroup} label="Generos">
          {genres &&
            genres.map((g) => {
              return (
                <option key={g.id} value={g.name} className={s.filterOption}>
                  {g.name}
                </option>
              );
            })}
        </optgroup>
      </select>

      <select
        className={s.filterSelector}
        onChange={handleSelect2}
        name=""
        id=""
      >
        <option className={s.filterOption} value="default">
          ORDEN...
        </option>
        <optgroup className={s.filterOptionGroup} label="Rating">
          <option className={s.filterOption} value="asc">
            Mayor a Menor
          </option>
          <option className={s.filterOption} value="desc">
            Menor a Mayor
          </option>
        </optgroup>
        <optgroup className={s.filterOptionGroup} label="Alphabetic">
          <option className={s.filterOption} value="A-Z">
            A - Z
          </option>
          <option className={s.filterOption} value="Z-A">
            Z - A
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default Filters;
