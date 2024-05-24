/**
 * Setting up a connection to the MongoDB database using Mongoose.
 */
const mongoose = require('mongoose');

/**
 * @description Patient Schema
 * @typedef {Object} Patient
 * @property {mongoose.Schema.Types.ObjectId} userId - Reference to the User model
 * @property {String[]} medicalRecords - Array of medical records
 * @property {Date} createdAt - Timestamp when the document was created
 * @property {Date} updatedAt - Timestamp when the document was last updated
 */
const patientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medicalRecords: [{ type: String }]
}, { timestamps: true });

/**
 * @description Patient Model
 * @type {mongoose.Model<Patient>}
 */
module.exports = mongoose.model('Patient', patientSchema);
