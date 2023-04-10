const Favorite = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteF = await Favorite.findByPk(id);
    await deleteF.destroy();
    const allFav = await Favorite.findAll();
    return res.status(200).json({ allFav });
    
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = deleteFav;
