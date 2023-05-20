const { Favorite } = require("../DB_connection");

const postFav = async (id, name, status, species, gender, origin, image) => {
  const fav = await Favorite.create({
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
  });

  return fav;
};

const putFav = (req, res) => {
  res.status(200).send("Estoy en el Put");
};

const deleteFav = async (id) => {
  const deleteF = await Favorite.findByPk(id);

  if (!deleteF) {
    return alert("No found id");
  }

  await deleteF.destroy();
};

module.exports = { postFav, putFav, deleteFav };
