const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

function getCharById(req, res) {
  const { id } = req.params;

  axios(`${URL}/character/${id}`)
    .then((response) => {
      const { id, image, name, gender, species } = response.data;
      return res.json({ id, name, gender, species, image });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
}

module.exports = getCharById;