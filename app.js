const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    commit_id: process.env.COMMIT_ID || "unknown",
    port,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
