const prisma = require("../utils/prismaClient");
exports.getCustomers = async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();
    res.json({
      customers,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.getCustomer = async (req, res) => {
  const { id: customerId } = req.params;
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: parseInt(customerId),
      },
    });
    res.json({ customer });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
exports.createCustomer = async (req, res) => {
  try {
    //1.leggi i dati dal body dell req;
    const customerData = req.body;
    console.log(customerData);
    //2.scrivi i dati sul DB usando prima;
    const customer = await prisma.customer.create({
      data: {
        ...customerData,
      },
    });
    res.json({ customer });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  const customerData = req.body;
  const { id: customerId } = req.params;
  try {
    const customer = await prisma.customer.update({
      where: {
        id: parseInt(customerId),
      },
      data: {
        ...customerData,
      },
    });
    res.json({ customer });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id: customerId } = req.params;
  try {
    const customer = await prisma.customer.delete({
      where: {
        id: parseInt(customerId),
      },
    });
    res.json({ customer });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
