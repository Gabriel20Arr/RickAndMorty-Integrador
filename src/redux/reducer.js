import { ADD_PERS, FILTER, ORDER, REMOVE_PERS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERS:
      return {
        ...state,
        // indicaciones
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_PERS:
      return {
        ...state,
        // indicaciones
        myFavorites: state.myFavorites.filter(
          (pers) => pers.id !== action.payload
        ),
      };

    case FILTER:
      // const  { allCharacters } = state;
      const filterChair = state.allCharacters.filter(
        (pers) => pers.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterChair,
      };

    case ORDER:
      const  { allCharacters } = state;
      const orderID = allCharacters.sort((a, b) => a.id - b.id);
      // const orderCharacters =  action.payload === "Ascendente" ? orderID : orderID.reverse();

      if(action.payload === "Ascendente") {
        return {
          ...state,
          allCharacters: orderID
        }
      
      } else if(action.payload === "Descendente") {
        return {
          ...state,
          allCharacters: orderID.reverse()
        }
      }

      return {
        ...state,
        myFavorites: orderID
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
