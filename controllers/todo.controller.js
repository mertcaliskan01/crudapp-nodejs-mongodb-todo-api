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
    res.status(200).json({ succeed: true, message: "GetAll" })
};

// Find a single Todo with an id
exports.get = (req, res) => {
    res.status(200).json({ succeed: true, message: "Get" })
};

// Update a Todo by the id in the request
exports.update = (req, res) => {
    res.status(200).json({ succeed: true, message: "Update" })
};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
    res.status(200).json({ succeed: true, message: "Delete" })
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
    res.status(200).json({ succeed: true, message: "DeleteAll" })
};

// Find all published Todos
exports.getAllCompleted = (req, res) => {
    res.status(200).json({ succeed: true, message: "GetAllCompleted" })
};