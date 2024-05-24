const express = require('express');
const { createUser, loginUser } = require('../controllers/authController');
const router = express.Router();

/**
 * @route POST /api/auth/create
 * @desc Create a new user
 */
router.post('/create', createUser);

/**
 * @route POST /api/auth/login
 * @desc Login user
 */
router.post('/login', loginUser);

module.exports = router;
