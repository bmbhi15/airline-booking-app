const statusCodes = require("http-status-codes").StatusCodes;

const controller = (req, res) => {
  res.send({
    status: statusCodes.OK,
    message: "Everything is working fine, congratulations!!",
    data: {},
    error: {},
  });
};

module.exports = controller;
