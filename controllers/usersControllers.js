const prisma = require("../utils/prismaClient");
exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({
      users,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.getUser = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    //1.leggi i dati dal body dell req;
    const userData = req.body;
    console.log(userData);
    //2.scrivi i dati sul DB usando prima;
    const user = await prisma.user.create({
      data: {
        ...userData,
      },
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  const userData = req.body;
  const { id: userId } = req.params;
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...userData,
      },
    });
    res.json({ user });
    
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  res.send(`User #${userId} deleted`);
};
