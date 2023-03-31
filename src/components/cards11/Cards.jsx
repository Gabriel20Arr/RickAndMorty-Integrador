import React from "react";
import Card from "../card/Card";
import styled from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {

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


