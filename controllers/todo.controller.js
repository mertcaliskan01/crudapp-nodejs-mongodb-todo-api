const mongoose = require("mongoose");
const Todo = require("../model/todo")(mongoose);
require("dotenv").config();


// Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title  || !req.body.description) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create model
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed ? req.body.completed : false
    });

    // Save Todo in the database
    todo
        .save(todo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Todos from the database.
exports.getAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Todo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred."
        });
      });
};

// Find a single Todo with an id
exports.get = (req, res) => {
    const id = req.params.id;
  
    Todo.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Todo with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Todo with id=" + id });
      });
};

// Update a Todo by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Todo with id=${id}.`
            });
          } else res.send({ message: "Todo was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Todo with id=" + id
          });
        });
};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Todo with id=${id}.`
          });
        } else {
          res.send({
            message: "Todo was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Todo with id=" + id
        });
      });
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
    Todo.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Todos were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all todos."
      });
    });
};

// Find all completed Todos
exports.getAllCompleted = (req, res) => {
    Todo.find({ completed: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todos."
      });
    });
};