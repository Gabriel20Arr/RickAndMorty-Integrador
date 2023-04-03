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

// const { URL, key } = process.env;

// const getCharById = (res, id) => {
//   const URL = "https://rickandmortyapi.com/api";

//   axios(`${URL}/character/${id}`)
//     .then((response) => {
//       const { id, image, name, gender, species } = response.data;
//       res.writeHead(200, { "Content-type": "application/json" });
//       return res.end(JSON.stringify({ id, name, gender, species, image }));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text/plain" });
//       return res.end(error.message);
//     });
// };
