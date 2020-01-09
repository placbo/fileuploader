const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors);

server.get("/", (req, res) => res.sendFile("index.html"));

server.listen(8000, () => {
  console.log("API-Server started on port 8080.");
});
