const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors);

server.get("/upload", (req, res) => {
  console.log("Upload called");
  res.send("Hello World!");
});

server.get("/", (req, res) => res.send("Use: /upload (POST)  /json (GET)"));

server.get("/json", (req, res) => res.json({ per: "ja" }));

server.listen(8000, () => {
  console.log("API-Server started on port 8000.");
});
