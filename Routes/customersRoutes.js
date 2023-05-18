const express = require("express");

const router = express.Router();
const customersControllers = require("../controllers/customersControllers.js");

router.get("/", customersControllers.getCustomers);
router.get("/:id",customersControllers.getCustomer);
router.post("/",customersControllers.createCustomer);
router.patch("/:id",customersControllers.updateCustomer);
router.delete("/:id",customersControllers.deleteCustomer);

module.exports = router;
