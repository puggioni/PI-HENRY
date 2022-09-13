import axios from "axios";
import {
  GET_DETAILS,
  GET_GENRES,
  GET_VIDEOGAMES,
  FILTER_BY_GENRE,
  ORDER_BY,
  FILTER_BY_CREATED,
  SEARCH_BY_NAME,
} from "./const";

export function getVideogames() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    dispatch({ type: GET_VIDEOGAMES, payload: response.data });
  };
}
export function getDetails(id) {
  return async function(dispatch) {
    const response = await axios.get(`http://localhost:3001/videogame/${id}`);
    dispatch({ type: GET_DETAILS, payload: response.data });
  };
}
export function searchByName(name) {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getGenres() {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3001/genres");
    dispatch({ type: GET_GENRES, payload: response.data });
  };
}

export function orderBy(order) {
  return function(dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
  };
}
export function filterByGenre(genre) {
  return function(dispatch) {
    dispatch({ type: FILTER_BY_GENRE, payload: genre });
  };
}

export function filterByCreated(created) {
  return function(dispatch) {
    dispatch({ type: FILTER_BY_CREATED, payload: created });
  };
}
