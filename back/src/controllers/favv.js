// const { Favorite } = require("../DB_connection");

let myFavorites = [];

const postFavvController = async (res, req) => {
  try {
    const newFavorites = req.body;
    const characterFound = myFavorites.find(
      (fav) => fav.id === newFavorites.id
    );

    if (!characterFound) {
      myFavorites.push(newFavorites);
      res.status(200).json(myFavorites);
    }

    throw Error("This character already exists");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const deleteFavvController = async (req, res) => {
  const { id } = req.params;
  myFavorite = myFavorite.filter((char) => {
    char.id !== id;
  });
  res.status(200).json({ status: "ok" });
};

module.exports = { postFavvController, deleteFavvController };