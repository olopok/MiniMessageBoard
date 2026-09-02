const dbMess = require("../db/queries");
const links = require ('../models/navlinks')

async function getMessages(req, res) {
  try {
    const messages = await dbMess.getAllMessages();
    res.render("index", { title: "Messages List", messages: messages, links: links });
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore database");
  }
}

module.exports = { getMessages };
