const express = require("express");
const app = express();
const boardMessages = require("./routes/board");
const newMessage = require("./routes/new");
const detailsMsg = require("./routes/details");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", boardMessages);
app.use("/new", newMessage);
app.use("/:messageId", detailsMsg);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
