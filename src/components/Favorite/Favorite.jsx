import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import React from "react";
import { filterCards, orderCards } from "../../redux/actions.js";
import style from "../Favorite/Favorite.module.css";



const Favorite = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  
  return (
    <div>
      <div>
        <select onChange={HandleOrderCards} name="order">
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <select onChange={HandleFilterCards} name="filtrar">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.fav}>
        {favorites.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
  
  function HandleOrderCards(e) {
    // const dispatch = useDispatch();
    dispatch(orderCards(e.target.value));
  }
  
  function HandleFilterCards(e) {
    // const dispatch = useDispatch();
    dispatch(filterCards(e.target.value));
  }
};
export default Favorite;
