const { Router } = require("express");
const messages = require("../models/dbMessages");
// const getMessageById = require("../models/dbMessages");
const links = require("../models/navlinks");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) =>
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    links: links,
  }),
);


module.exports = messagesRouter;
