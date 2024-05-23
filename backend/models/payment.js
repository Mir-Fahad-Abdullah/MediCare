/**
 * Mongoose library for MongoDB object modeling.
 * @requires module:mongoose
 * @type {Object}
 */
const mongoose = require('mongoose');

/**
 * Payment schema defining the structure of payment documents in the MongoDB database.
 * @type {mongoose.Schema}
 * @property {ObjectId} patientId - The ID of the patient making the payment. References the Patient model.
 * @property {Number} amount - The amount of the payment.
 * @property {String} paymentMethod - The method used for the payment (e.g., credit card, cash).
 * @property {Date} paymentDate - The date and time when the payment was made. Defaults to the current date and time.
 */
const paymentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    paymentDate: { type: Date, default: Date.now }
}, { timestamps: true });

/**This line exports a Mongoose model named Payment which is created using the paymentSchema. */
module.exports = mongoose.model('Payment', paymentSchema);
