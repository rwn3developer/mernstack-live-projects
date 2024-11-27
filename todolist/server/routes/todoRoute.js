const express = require('express');

const routes = express.Router();

const verifyToken = require('../middleware/verifyToken');

const { addtodo, viewTodo } = require('../controllers/TodoController');


routes.post('/addtodo', verifyToken, addtodo)
routes.get('/viewtodo', verifyToken, viewTodo)

module.exports = routes;