const { Router } = require("express");
const pool = require("../db/pool");
const messagesController = require("../controllers/messagesController");
// const messages = require("../models/dbMessages");
// const links = require("../models/navlinks");

const messagesRouter = Router();

// messagesRouter.get("/", (req, res) =>
//   res.render("index", {
//     title: "Mini Message Board",
//     messages: messages,
//     links: links,
//   }),
// );
messagesRouter.get("/", messagesController.getMessages);
module.exports = messagesRouter;
