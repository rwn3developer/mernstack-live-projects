const express = require('express');

const routes = express.Router();

const { registerUser, loginUser } = require('../controllers/AuthController');
const verifyToken = require('../middleware/verifyToken');


routes.post('/register', registerUser)
routes.post('/login', loginUser)





module.exports = routes;