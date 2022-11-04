module.exports = app => {
    const todos = require("../controllers/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo
    router.post("/", todos.create);
  
    // Retrieve all Todos
    router.get("/", todos.getAll);
  
    // Retrieve all completed Todos
    router.get("/completed", todos.getAllCompleted);
  
    // Retrieve a single Todo with id
    router.get("/:id", todos.get);
  
    // Update a Todo with id
    router.put("/:id", todos.update);
  
    // Delete a Todo with id
    router.delete("/:id", todos.delete);
  
    // Create a new Todo
    router.delete("/", todos.deleteAll);
  
    app.use('/api/tasks', router);
  };