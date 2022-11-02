const User = require("../model/user");
require("dotenv").config();
require("../config/database").connect();


exports.login = async (req, res) => {
  res.status(200).send("Login");
};
  

exports.register = async (req, res) => {
  res.status(200).send("Registers");
};


exports.welcome = async (req, res) => {
  res.status(200).send("Welcome");
};
