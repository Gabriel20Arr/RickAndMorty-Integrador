const { User }= require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      default: { password },
    });

    res.status(201).json({ user, created });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = postUser;
