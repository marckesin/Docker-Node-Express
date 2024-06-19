const express = require("express");
const helmet = require("helmet");

const port = process.env.PORT || 3000;
const app = express();

app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express</h1>")
});

app.listen(port);
