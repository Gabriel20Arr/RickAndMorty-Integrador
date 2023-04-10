const Favorite = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  }

  try {
    const favoitess = await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const allFavorites = await Favorite.findAll();
    return res.status(200).json({allFavorites});

  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = postFav;
