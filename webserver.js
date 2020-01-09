const express = require("express");
const cors = require("cors");
const server = express();
const port = 8000;

server.use(cors);

server.get("/", (req, res) => res.sendFile("index.html"));

server.listen(port, "0.0.0.0", () => {
  console.log(`Web server started on port ${port}.`);
});
