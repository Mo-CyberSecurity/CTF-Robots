const express = require("express"),
  app = express();

const port = process.env.YOUR_PORT || process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(__dirname + "/" + "robots.txt");
});

app.get("/SUPER-SECRET-ROOM", (req, res) => {
  res.send("flag");
});

app.get("/Grac", (req, res) => {
  res.send("{");
});

app.get("/NE-SUDA", (req, res) => {
  res.send("Y");
});

app.get("/SUDA", (req, res) => {
  res.send("O");
});

app.get("/TUDA", (req, res) => {
  res.send("U");
});

app.get("/FLAG", (req, res) => {
  res.send("_");
});

app.get("/FFLLAAGGSS", (req, res) => {
  res.send("A");
});

app.get("/PASSWORD", (req, res) => {
  res.send("R");
});

app.get("/PASSWORDS", (req, res) => {
  res.send("E");
});

app.get("/777", (req, res) => {
  res.send("_");
});

app.get("/PASSWORDSADAS", (req, res) => {
  res.send("T");
});

app.get("/RO", (req, res) => {
  res.send("RO");
});

app.get("/LL", (req, res) => {
  res.send("LL");
});

app.get("/DE", (req, res) => {
  res.send("ED");
});

app.get("/MAYBE-YOU-WANNA-PLAY", (req, res) => {
  res.send("}");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});












// flag{YOU_ARE_TROLLED}