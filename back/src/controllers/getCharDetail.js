const axios = require("axios");

const URL = "https://rickandmortyapi.com/api";

function getCharDetail(req, res) {
  const { id } = req.params;

  axios(`${URL}/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image } = response.data;
      return res.json({ id, name, gender, species, origin, image });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
}


module.exports =  getCharDetail;
