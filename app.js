const express = require("express");
const helmet = require("helmet");

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.json({
    commit_id: process.env.COMMIT_ID || "unknown",
    port,
  });
});

app.listen(port);
