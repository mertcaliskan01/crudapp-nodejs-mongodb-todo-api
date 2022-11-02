const auth = require("../middleware/auth");

module.exports = app => {
    const tutorials = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    router.post("/login", tutorials.login);

    router.post("/register", tutorials.register);

    router.post("/welcome", auth, tutorials.welcome);

    app.use('/', router);
  };