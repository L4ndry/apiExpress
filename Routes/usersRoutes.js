const express = require("express");

const router = express.Router();
const usersControllers = require("../controllers/usersControllers.js");

router.get("/", usersControllers.getUsers);
router.get("/:id",usersControllers.getUser);
router.post("/",usersControllers.createUser);
router.put("/:id",usersControllers.updateUser);
router.delete("/:id",usersControllers.deleteUser);

module.exports = router;
