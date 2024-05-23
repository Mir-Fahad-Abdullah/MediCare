/**
 * User: This imports the User model, which represents the users collection in the MongoDB database.
 * bcrypt: This library is used for hashing passwords securely.
 * jwt: This library is used for creating and verifying JSON Web Tokens (JWT), which are used for authentication.
 */
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @description Create a new user 
 * @param {Object} req - The request object
 * @param {Object} req.body - The body of the request
 * @param {string} req.body.name - The name of the user
 * @param {string} req.body.username - The username of the user
 * @param {string} req.body.email - The email of the user
 * @param {string} req.body.contactNumber - The contact number of the user
 * @param {string} req.body.password - The password of the user
 * @param {string} req.body.role - The role of the user
 * @param {Object} res - The response object
 * @returns {void}
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
 * @description Login user
 * @param {Object} req - The request object
 * @param {Object} req.body - The body of the request
 * @param {string} req.body.username - The username of the user
 * @param {string} req.body.password - The password of the user
 * @param {string} req.body.role - The role of the user
 * @param {Object} res - The response object
 * @returns {void}
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
 * Exports the createUser and loginUser functions so they can be used in other parts of the application.
 */
module.exports = { createUser, loginUser };
