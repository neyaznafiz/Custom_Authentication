const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const hbs = require("hbs");
const path = require("path");
const collection = require("./mongodb");

const port = 5000;

const templatePath = path.join(__dirname, "../template");

app.use(express.json);
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await collection.insertMany([data]);

  res.render("home");
});

app.listen(port, () => {
  console.log(`connected to the port ${port}`);
});
