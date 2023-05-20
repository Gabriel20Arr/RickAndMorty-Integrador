const axios = require("axios");
const { Favorite } = require("../DB_connection");

const URL = "https://rickandmortyapi.com/api";

const getCharById = async (id) => {
  const res = await Favorite.findByPk(id);
  if (res) {
    const { id, name, gender, species, origin, image } = res;

    return { id, name, gender, species, origin, image };
  } else {
    return await axios(`${URL}/character/${id}`)
      .then((response) => {
        const { id, name, image } = response.data;
        return { id, name, image };
      })
      .catch((error) => error.message);
  }
};

module.exports = getCharById;
