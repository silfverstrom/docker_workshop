const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("HELLO FROM DOCKER");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
