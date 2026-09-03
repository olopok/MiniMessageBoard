const { Router } = require("express");
// const pool = require("../db/pool");
const messagesController = require("../controllers/messagesController");
// const messages = require("../models/dbMessages");
// const links = require("../models/navlinks");

const messagesRouter = Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.get("/new", messagesController.newMessageGet);
messagesRouter.get("/messages/:id", messagesController.details);
messagesRouter.post("/new", messagesController.createNewMessagePost);

module.exports = messagesRouter;
