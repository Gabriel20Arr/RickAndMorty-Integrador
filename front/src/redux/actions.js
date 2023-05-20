//! definimos el tipo de action
import axios from "axios";

export const ADD_PERS = "ADD_PERS";
export const REMOVE_PERS = "REMOVE_PERS";
export const FILTER = "FILTRAR";
export const ORDER = "ORDER";
export const GET_FAVORITE = "GET_FAVORITE";
export const REMOVE_FAV = "REMOVE_FAV";

//! creamos la action creator
export const agregarPersFav = (personaje) => {
  return { type: ADD_PERS, payload: personaje };
};

export const removePersFav = (id) => {
  return { type: REMOVE_PERS, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

export const getFavorite = (character) => {
  return async function (dispatch) {
    const url = "http://localhost:3001";

    const { data } = await axios(`${url}/rickandmorty/favv`, character);

    if (!data.length) throw Error("No hay favoritos");

    dispatch({ type: GET_FAVORITE, payload: data });
  };
};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favv/" + id;

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
