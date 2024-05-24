/**
 * Mongoose library for MongoDB object modeling.
 * @requires module:mongoose
 * @type {Object}
 */
const mongoose = require('mongoose');

/**
 * Review schema defining the structure of review documents in the MongoDB database.
 * @type {mongoose.Schema}
 * @property {ObjectId} doctorId - The ID of the doctor being reviewed. References the Doctor model.
 * @property {ObjectId} patientId - The ID of the patient writing the review. References the Patient model.
 * @property {Number} rating - The rating given by the patient to the doctor.
 * @property {String} [comment] - Any additional comments provided by the patient about the doctor.
 */
const reviewSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    rating: { type: Number, required: true },
    comment: { type: String }
}, { timestamps: true });

/**
 * Review model for interacting with the reviews collection in the MongoDB database.
 * @type {Model}
 */
module.exports = mongoose.model('Review', reviewSchema);
