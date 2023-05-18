const express = require("express");

const router = express.Router();
const companiesControllers = require("../controllers/companiesControllers.js");

router.get("/", companiesControllers.getCompanies);
router.get("/:id",companiesControllers.getCompany);
router.post("/",companiesControllers.createCompany);
router.patch("/:id",companiesControllers.updateCompany);
router.delete("/:id",companiesControllers.deleteCompany);

module.exports = router;
