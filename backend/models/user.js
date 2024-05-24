/**
 * Setting up a connection to the MongoDB database using Mongoose.
 */
const mongoose = require('mongoose');

/**
 * @description User Schema
 * @typedef {Object} User
 * @property {String} name - User's name
 * @property {String} username - User's username (must be unique)
 * @property {String} email - User's email
 * @property {String} contactNumber - User's contact number
 * @property {String} password - User's password
 * @property {String} role - User's role (must be either 'Patient' or 'Doctor')
 * @property {Date} createdAt - Timestamp when the document was created
 * @property {Date} updatedAt - Timestamp when the document was last updated
 */
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Patient', 'Doctor'] }
}, { timestamps: true });

/**
 * @desc User Model
 * @type {mongoose.Model<User>}
 */
module.exports = mongoose.model('User', userSchema);
