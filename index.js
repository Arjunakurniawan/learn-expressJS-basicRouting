const express = require("express");
const host = "localhost";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, function () {
  console.log(`running server.... ${host}:${port}`);
});
