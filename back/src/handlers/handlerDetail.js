const getCharDetail = require("../controllers/getCharDetail");

const handlerDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const search = await getCharDetail(id);

    res.status(200).json(search);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = handlerDetail;
