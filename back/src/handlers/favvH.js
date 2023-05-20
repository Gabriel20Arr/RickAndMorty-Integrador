// const { Favorite } = require("../DB_connection");
// const { postFavvController, deleteFavvController } = require("../controllers/favv");

// const postFavvHandler = async (req, res) => {
//     const { id, name, image } = req.body;

//     // if (!id || !name || !origin || !status || !image || !species || !gender) {

//     //   return res.status(401).json({ message: "Faltan datos" });
//     // } else if (id <= 826) {

//     //   return res.status(401).send("El id debe ser mayor a 826");
//     // }
  
//     const idDataBase = await Favorite.findByPk(id);
//     if (idDataBase) {
//       return res.status(401).send("Save with exists");
//     }
  
//     try {
//       const favoitess = await postFavvController(
//         id,
//         name,
//         image
//       );
  
//       res.status(200).json(favoitess);
//     } catch (error) {
//       res.status(500).json({ err: error.message });
//     }
// };

// const deleteFavvHandler = async (req, res) => {
//     const { id } = req.params;

//     await deleteFavvController(id)
//       .then(() =>
//         res.status(200).send({ message: "Favorite successfully delete" })
//       )
//       .catch(() => res.status(500).send({ error: "Error deleting favorite" }));
// };

// module.exports = { postFavvHandler, deleteFavvHandler };
