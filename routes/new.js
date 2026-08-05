const { Router } = require("express");

const newMessagesRouter = Router();

newMessagesRouter.get("/", (req, res) => res.send("Write the new message"));

module.exports = newMessagesRouter;
