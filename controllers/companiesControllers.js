const prisma = require("../utils/prismaClient");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await prisma.company.findMany();
    res.json({
      companies,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.getCompany = async (req, res) => {
  const { id: companyId } = req.params;
  try {
    const company = await prisma.company.findUnique({
      where: {
        id: companyId,
      },
    });
    res.json({
      company,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.createCompany = async (req, res) => {
  res.send("company created");
};

exports.updateCompany = async (req, res) => {
  const { id: companyId } = req.params;
  res.send(`company #${companyId} updated`);
};

exports.deleteCompany = async (req, res) => {
  const { id: companyId } = req.params;
  res.send(`company #${companyId} deleted`);
};
