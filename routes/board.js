const { Router } = require("express");
const pool = require("../db/pool");
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
messagesRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.render("index", { time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore database");
  }
});

module.exports = messagesRouter;
