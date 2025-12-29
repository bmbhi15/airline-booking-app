const express = require("express");

const v1_router = express.Router();
v1_router.use("/test", (req, res) => {
  res.send("hello this route is working");
});
module.exports = v1_router;
