const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  about: String,
  skills: [String],
  email: String,
  github: String,
  linkedin: String
});

module.exports = mongoose.model("Portfolio", portfolioSchema);