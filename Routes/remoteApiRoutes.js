const express = require("express");

const router = express.Router();
const remoteApiControllers = require("../controllers/remoteApiControllers");

router.get("/",remoteApiControllers.quote);

module.exports = router;