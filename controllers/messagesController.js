const dbMess = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await dbMess.getAllMessages();
    res.render("index", { title: "Messages List", Messages: messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore database");
  }
}

module.exports = { getMessages };
