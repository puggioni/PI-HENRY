import React from "react";
import { filterBy, orderBy } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import s from "./filters.module.css";

const Filters = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(filterBy(e.target.value));
  };
  const handleOrder = (e) => {
    dispatch(orderBy(e.target.value));
  };
  return (
    <div className={s.filterContainer}>
      <select className={s.selector} onChange={handleSelect}>
        <option className={s.option} value="todos">
          Todos
        </option>
        <option className={s.option} value="creados">
          Creados
        </option>
        <option className={s.option} value="api">
          Api
        </option>
        <optgroup className={s.optionGroup} label="Generos">
          <option>
            {genres &&
              genres.map((g) => (
                <option key={g.name} value={g.name}>
                  {g.name}
                </option>
              ))}
          </option>
        </optgroup>
      </select>
      <select className={s.selector} onChange={handleOrder}>
        <optgroup className={s.optionGroup} label="Orden">
          <option className={s.option} value="asc">
            {" "}
            A-Z
          </option>
          <option className={s.option} value="desc">
            Z-A
          </option>
        </optgroup>
        <optgroup className={s.optionGroup} label="Rating">
          <option className={s.option} value="rating" />
        </optgroup>
      </select>
    </div>
  );
};

export default Filters;
