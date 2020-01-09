const express = require("express");
const path = require("path");
const server = express();
const port = 3002;

server.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

server.listen(port, () => {
  console.log(`Web server started on port ${port}.`);
});
