const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessagePost(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    username,
    text,
  ]);
}

async function messageDetails(id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [id],
  );
  return rows[0];
}

module.exports = { getAllMessages, newMessagePost, messageDetails };
