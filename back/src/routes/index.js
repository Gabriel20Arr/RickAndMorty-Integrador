const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let dataBase = require("../utils/favs");

const router = Router();

router.get("/onSearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res) => {
  dataBase.push(req.body);
  res.status(200).json({ status: "ok" });
});

router.get("/rickandmorty/fav", (req, res) => {
  res.status(200).json(dataBase);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;
  dataBase = dataBase.filter((char) => {
    char.id !== id;
  });
  res.status(200).json({ status: "ok" });
});

module.exports = router;
