//! definimos el tipo de action
import axios from 'axios';

export const ADD_PERS = "ADD_PERS";
export const REMOVE_PERS = "REMOVE_PERS";
export const FILTER = "FILTRAR";
export const ORDER = "ORDER";
export const GET_FAVORITE = "GET_FAVORITE";


//! creamos la action creator
export const agregarPersFav = (personaje) => {
  return {type: ADD_PERS, payload: personaje};
};

export const removePersFav = (id) => {
  return { type: REMOVE_PERS, payload: id };
};

export const filterCards = (gender) => {
  return {type:FILTER, payload: gender};
}

export const orderCards = (id) => {
  return {type:ORDER, payload: id};
}

export const  getFavorite = () => {
  return async function (dispatch) {
    const url = "http://localhost:3001";
    const response = await axios.get(`${url}/rickandmorty/fav`)
    dispatch({type: GET_FAVORITE, payload: response.data})
  }
}

// export const removeFavorite = () => {};