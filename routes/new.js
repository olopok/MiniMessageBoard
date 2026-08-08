const { Router } = require("express");
const links = require("../models/navlinks");
const messages = require("../models/dbMessages");

const newMessagesRouter = Router();

newMessagesRouter.get("/", (req, res) =>
  res.render("newformmessage", { title: "New Message", links: links }),
);
newMessagesRouter.post("/", (req, res) => {
  messages.push({
    id: crypto.randomUUID(),
    user: req.body.user,
    text: req.body.messageText,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = newMessagesRouter;
