const app = require("express");
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "exercise.html"));
});

app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "stats.html"));
});

module.exports = app;
