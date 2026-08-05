const { Router } = require("express");
const messages=require('../models/dbMessages')

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => res.render("index", {messages: messages}));

module.exports = messagesRouter;
