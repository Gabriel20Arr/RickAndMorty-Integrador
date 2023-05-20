const { Favorite } = require("../DB_connection");
const { postFav, putFav, deleteFav } = require("../controllers/favoritos");

const postFavH = async (req, res) => {
  // console.log(req.body);
  const { id, name, status, species, gender, origin, image } = req.body;

  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  } else if (id <= 826) {
    return res.status(401).send("El id debe ser mayor a 826");
  }

  const idDataBase = await Favorite.findByPk(id);
  if (idDataBase) {
    return res.status(401).send("The id already exists");
  }

  try {
    const favoitess = await postFav(
      id,
      name,
      status,
      species,
      gender,
      origin,
      image
    );

    res.status(200).json(favoitess);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const putFavH = (req, res) => {
  res.status(200).send("Estoy en el Put");
};

const deleteFavH = async (req, res) => {
  const { id } = req.params;

  await deleteFav(id)
    .then(() =>
      res.status(200).send({ message: "Favorite successfully delete" })
    )
    .catch(() => res.status(500).send({ error: "Error deleting favorite" }));
};

module.exports = { postFavH, putFavH, deleteFavH };
