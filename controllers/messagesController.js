const dbMess = require("../db/queries");
const links = require("../models/navlinks");

async function getMessages(req, res) {
  try {
    const messages = await dbMess.getAllMessages();
    console.log(messages);
    res.render("index", {
      title: "Messages List",
      messages: messages,
      links: links,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore database");
  }
}

function newMessageGet(req, res) {
  res.render("newformmessage", { title: "New Message", links: links });
}

async function createNewMessagePost(req, res) {
  const { username, text } = req.body;
  await dbMess.newMessagePost(username, text);
  // res.render("newformmessage", { title: "New Message", link: links });
  res.redirect("/");
}

async function details(req, res) {
  const { id } = req.params;
  const msg = await dbMess.messageDetails(id);
  if (!msg) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { title: "Message Details", links: links, msg });
}

module.exports = { getMessages, createNewMessagePost, newMessageGet, details };
