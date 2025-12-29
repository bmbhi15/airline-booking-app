const express = require("express");
const { PORT } = require("./src/config");
const router = require("./src/routes");

const app = express();

app.use("/api", router);

app.listen(PORT);
