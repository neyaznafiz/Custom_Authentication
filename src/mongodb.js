const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("Failed to connect MongoDB");
  });

//   login schema
const logInSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const authCollection = new mongoose.model("LoginInfo", logInSchema);

module.exports = authCollection;
