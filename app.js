require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Default" });
});


module.exports = app;