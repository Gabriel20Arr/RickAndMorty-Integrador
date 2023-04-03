import React from "react";
import { useDispatch } from "react-redux";
import { getFavorite } from "../../redux/actions";
import Card from "../card/Card";
import styled from "./Cards.module.css";
import { useEffect } from "react";

const Cards = ({ characters, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, []);

  return (
    <div className={styled.Cards2}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;


