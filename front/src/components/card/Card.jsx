import { Link } from "react-router-dom";
import styled from "./Card.module.css";

import { removePersFav ,getFavorite } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Card({ id, name, species, gender, image, onClose, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const agregarPersFav = (personaje) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", personaje)
      .then((res) => console.log("ok"));
  };

  const removePersFav = async (id) => {
    await axios(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorite());
    alert("Eliminado con exito");
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removePersFav(id);
    } else {
      setIsFav(true);
      agregarPersFav({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    if (Array.isArray(myFavorites)) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, id]);

  return (
    <div className={styled.card}>
      <div className={styled.fondoX}>
        <button onClick={() => onClose(id)} className={styled.botonx}>
          x
        </button>
      </div>

      <Link to={`/detail/${id}`}>
        <h2 className={styled.h2Name}>{name}</h2>
      </Link>

      <img src={image} alt="" />

      <h3 className={styled.species}>Species: {species}</h3>
      <h3 className={styled.gender}>Gende: {gender}</h3>

      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // agregarPersFav: (personaje) => {
    //   dispatch(agregarPersFav(personaje));
    // },
    removePersFav: (id) => {
      dispatch(removePersFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
