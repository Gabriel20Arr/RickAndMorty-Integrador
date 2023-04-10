const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require("./DB_connection");

const server = express();
const PORT = 3001;

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

conn
  .sync({ alter: true })
  .then((res) => {
    server.listen(PORT, () => {
      console.log("Listening on port " + PORT);
    });
  })
  .catch((error) => console.log(error.message));
