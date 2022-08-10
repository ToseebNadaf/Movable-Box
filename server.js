const express = require("express");
const path = require("path");

const app = express();
const port = "6001";

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
  console.log(`Movable Box Generator server started listening at ${port}`);
});
