/**
 * Setting up a connection to the MongoDB database using Mongoose.
 */
const mongoose = require('mongoose');

/**
 * @description Doctor Schema
 * @typedef {Object} Doctor
 * @property {mongoose.Schema.Types.ObjectId} userId - Reference to the User model
 * @property {String} availability - Doctor's availability
 * @property {String} chamberAddress - Address of the doctor's chamber
 * @property {String} mobileNumber - Doctor's mobile number
 * @property {String} degree - Doctor's degree
 * @property {Date} createdAt - Timestamp when the document was created
 * @property {Date} updatedAt - Timestamp when the document was last updated
 */
const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    availability: { type: String, required: true },
    chamberAddress: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    degree: { type: String, required: true }
}, { timestamps: true });

/**
 * @description Doctor Model
 * @type {mongoose.Model<Doctor>}
 */
module.exports = mongoose.model('Doctor', doctorSchema);
