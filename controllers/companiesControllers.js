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
  console.log(companyId);
  try {
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(companyId),
      },
    });
    res.json({
      company,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.createCompany = async (req, res) => {
  try {
    //1.leggi i dati dal body dell req;
    const companyData = req.body;
    console.log(companyData);
    //2.scrivi i dati sul DB usando prima;
    const company = await prisma.company.create({
      data: {
        ...companyData,
      },
    });
    res.json({ company });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
exports.updateCompany = async (req, res) => {
  const companyData = req.body;
  const { id: companyId } = req.params;
  try {
    const company = await prisma.company.update({
      where: {
        id: parseInt(companyId),
      },
      data: {
        ...companyData,
      },
    });
    res.json({ company });
    
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.deleteCompany = async (req, res) => {
  const { id: companyId } = req.params;
  try {
    const company = await prisma.company.delete({
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
