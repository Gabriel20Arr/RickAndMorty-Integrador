//! definimos el tipo de action
export const ADD_PERS = "ADD_PERS";
export const REMOVE_PERS = "REMOVE_PERS";
export const FILTER = "FILTRAR";
export const ORDER = "ORDER";

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