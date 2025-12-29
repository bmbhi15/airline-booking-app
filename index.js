const express = require("express");
const { PORT } = require("./src/config");

const app = express();

app.get("/", (req, res) => {
  res.send("Started my first server");
});
app.listen(PORT);
