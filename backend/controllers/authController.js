/**
 * User model that defines the structure and methods for user documents in the MongoDB database.
 * @requires module:../models/user
 * @type {Model}
 */
const User = require('../models/user');


/**
 * bcrypt library for hashing and comparing passwords.
 * @requires module:bcrypt
 * @type {Object}
 */
const bcrypt = require('bcrypt');

/**
 * jsonwebtoken library for creating and verifying JSON Web Tokens.
 * @requires module:jsonwebtoken
 * @type {Object}
 */
const jwt = require('jsonwebtoken');

/**
 * Creates a new user with the provided details in the request body.
 * Hashes the user's password before saving it to the database.
 * Sends a success response if the user is created successfully, or an error response if there is a failure.
 * @function createUser
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.body - The body of the request containing user details.
 * @param {string} req.body.name - The name of the user.
 * @param {string} req.body.username - The username of the user.
 * @param {string} req.body.email - The email of the user.
 * @param {string} req.body.contactNumber - The contact number of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {string} req.body.role - The role of the user.
 * @param {Object} res - The response object from Express.js.
 * @returns {Promise<void>} - A promise that resolves when the user is created or an error occurs.
 */
const createUser = async (req, res) => {
    try {
        const { name, username, email, contactNumber, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            username,
            email,
            contactNumber,
            password: hashedPassword,
            role
        });

        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * Authenticates a user with the provided credentials in the request body.
 * Checks if the user exists and verifies the password.
 * If successful, generates a JSON Web Token (JWT) and sends it in the response.
 * If unsuccessful, sends an appropriate error response.
 * @function loginUser
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.body - The body of the request containing login credentials.
 * @param {string} req.body.username - The username of the user.
 * @param {string} req.body.password - The password of the user.
 * @param {string} req.body.role - The role of the user.
 * @param {Object} res - The response object from Express.js.
 * @returns {Promise<void>} - A promise that resolves when the authentication process is complete.
 */
const loginUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = await User.findOne({ username, role });

        if (!user) {
            return res.status(404).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
/**
 * @module
 * @exports {Object} - An object containing the createUser and loginUser functions.
 */
module.exports = { createUser, loginUser };
