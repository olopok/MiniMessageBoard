const { Router } = require("express");
const links = require("../models/navlinks");

const newMessagesRouter = Router();

newMessagesRouter.get("/", (req, res) => res.render("newformmessage", { title: 'New Message', links: links }));

module.exports = newMessagesRouter;
