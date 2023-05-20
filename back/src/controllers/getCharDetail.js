const axios = require("axios");
const { Favorite } = require("../DB_connection");

const URL = "https://rickandmortyapi.com/api";

const getCharDetail = async (id) => {
  const char = await Favorite.findByPk(id);

  if (char) {
    const { id, name, gender, species, origin, image } = char;

    return { id, name, gender, species, origin, image };
  } else {
    return await axios(`${URL}/character/${id}`)
      .then((responses) => {
        const { id, name, gender, species, origin, image } = responses.data;

        return { id, name, gender, species, origin, image };
      })
      .catch((error) => error.message);
  }
};

module.exports = getCharDetail;
