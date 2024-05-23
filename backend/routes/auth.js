/**
 * Express.js router for handling user authentication routes.
 * @module authRouter
 * @requires express
 * @requires ../controllers/authController
 */
const express = require('express');
const { createUser, loginUser } = require('../controllers/authController');
const router = express.Router();

/**
 * Route for creating a new user account.
 * @param {string} path - The route path, '/create'.
 * @param {Function} middleware - The controller function responsible for creating a new user account.
 */
router.post('/create', createUser);

/**
 * Route for user authentication (login).
 * @param {string} path - The route path, '/login'.
 * @param {Function} middleware - The controller function responsible for user authentication (login).
 */
router.post('/login', loginUser);

/**This line exports the router instance created earlier. */
module.exports = router;
