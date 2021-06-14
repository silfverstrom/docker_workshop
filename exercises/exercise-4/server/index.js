const express = require("express");
const morgan = require("morgan");

const fs = require('fs');

app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from docker");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
