const { Router } = require("express");
const links = require("../models/navlinks");
const messages = require("../models/dbMessages");

const messageDetails = Router();

messageDetails.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  console.log(messageId);
  const msg = messages.find((message) => message.id === messageId);
    console.log(msg);
    res.render('message',{title: 'Message Details', links: links, msg})
});

module.exports = messageDetails;
