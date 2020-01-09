const express = require("express");
const cors = require("cors");
const server = express();
const port = 8081;

server.use(cors);

server.post("/upload", (req, res) => {
  console.log("Upload called");
  res.send("Hello World!");
});

server.get("/", (req, res) => {
  res.send("Use: /upload (POST)  /json (GET)");
  res.set("Connection", "close");
});

server.get("/json", (req, res) => res.json({ per: "ja" }));

server.listen(port, "0.0.0.0", () => {
  console.log(`API-Server started on port ${port}.`);
});
