const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const port = process.env.PORT || 5000;

const templatePath = path.join(__dirname, "../template")

app.use(express.json);
app.set("view engin", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(port, () => {
  console.log(`connected to the port ${port}`);
});
