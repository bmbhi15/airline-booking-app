const express = require("express");
const v1_router = require("./v1");
const router = express.Router();
router.use("/v1", v1_router);
module.exports = router;
