import axios from "axios";
import {
  FILTER_BY,
  GET_DETAILS,
  GET_GENRES,
  GET_VIDEOGAMES,
  ORDER_BY,
} from "./const";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    dispatch({ type: GET_VIDEOGAMES, payload: response.data });
  };
}
export function getDetails() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames/:id");
    dispatch({ type: GET_DETAILS, payload: response.data });
  };
}
export function searchByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    dispatch({ type: GET_VIDEOGAMES, payload: response.data });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/genres");
    dispatch({ type: GET_GENRES, payload: response.data });
  };
}
export function filterBy(filter) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY, payload: filter });
  };
}

export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
  };
}
