const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
// let dataBase = require("../utils/favs");
const conn = require("../DB_connection");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const router = Router();

router.get("/onSearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/login", postUser);
router.get("/rickandmorty/login", login);

router.post("/rickandmorty/fav", postFav);

router.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = router;

router.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json({ data: conn });
});

// router.post("/rickandmorty/fav", (req, res) => {
//   dataBase.push(req.body);
//   res.status(200).json({ status: "ok" });
// });

// router.delete("/rickandmorty/fav/:id", (req, res) => {
//   const { id } = req.params;
//   dataBase = dataBase.filter((char) => {
//     char.id !== id;
//   });
//   res.status(200).json({ status: "ok" });
// });
