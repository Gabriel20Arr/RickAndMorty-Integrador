const { Router } = require("express");
const handlerChairId = require("../handlers/AllChair");
const handlerDetail = require("../handlers/handlerDetail");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const { postFavH, putFavH, deleteFavH } = require("../handlers/Fav");
// const { postFavvHandler, deleteFavvHandler } = require("../handlers/favvH");
const {
  postFavvController,
  deleteFavvController,
} = require("../controllers/favv");

const router = Router();

router.get("/onSearch/:id", handlerChairId);
router.get("/detail/:id", handlerDetail);

router.post("/rickandmorty/login", postUser);
router.get("/rickandmorty/login", login);

router.post("/rickandmorty/fav", postFavH);
router.put("/rickandmorty/fav", putFavH);
router.delete("/rickandmorty/fav/:id", deleteFavH);

router.post("/rickandmorty/favv", postFavvController);
router.delete("/rickandmorty/favv/:id", deleteFavvController);

module.exports = router;
