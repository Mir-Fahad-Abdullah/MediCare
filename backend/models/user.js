/**
 * Mongoose library for MongoDB object modeling.
 * @requires module:mongoose
 * @type {Object}
 */
const mongoose = require('mongoose');

/**
 * User schema defining the structure of user documents in the MongoDB database.
 * @type {mongoose.Schema}
 * @property {String} name - The name of the user.
 * @property {String} username - The username of the user. Must be unique.
 * @property {String} email - The email address of the user.
 * @property {String} contactNumber - The contact number of the user.
 * @property {String} password - The hashed password of the user.
 * @property {String} role - The role of the user, either 'Patient' or 'Doctor'.
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
 * User model for interacting with the users collection in the MongoDB database.
 * @type {Model}
 */
module.exports = mongoose.model('User', userSchema);
