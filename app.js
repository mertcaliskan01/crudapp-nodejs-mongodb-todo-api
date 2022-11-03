require('express-async-errors');
require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const error = require("./middleware/error");


const app = express();

app.use(express.json());



require("./routes/auth.routes")(app);

app.use(error);

module.exports = app;