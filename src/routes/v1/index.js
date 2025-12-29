const express = require("express");
const controller = require("../../controllers");

const v1_router = express.Router();
v1_router.use("/test", controller);
module.exports = v1_router;
