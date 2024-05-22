const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @desc Create a new user
 * @param req
 * @param res
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
 * @desc Login user
 * @param req
 * @param res
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

module.exports = { createUser, loginUser };
