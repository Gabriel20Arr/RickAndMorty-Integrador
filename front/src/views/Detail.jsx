// DETALLES DE LA CARTA
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../views/Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL = "http://localhost:3001";
    // const key = "3ecf99bb3382.b75baf9da14b9a8b40d6";

    fetch(`${URL}/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.conteiner}>
      {character.name ? (
        <div className={style.cardDF}>
          <h2 className={style.cardN}>{character.name}</h2>
          <p className={style.card2}>{character.species}</p>
          <p className={style.card3}>{character.gender}</p>
          <p className={style.card4}>{character.origin?.name}</p>
          <img className={style.cardimg} src={character.image} alt="imagen" />
        </div>
      ) : (
        <h2 className={style.Loading}>Loading...</h2>
      )}
    </div>
  );
};

export default Detail;
