/**
 
* This model is used to interact with the payments collection in the database.
 * @requires module:../models/payment
 * @type {Model}
 */
const Payment = require('../models/payment');

/**
 * Creates a new payment with the provided details in the request body.
 * Saves the payment to the database and sends a success response if the payment is made successfully.
 * Sends an error response if there is a failure.
 * @function makePayment
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.body - The body of the request containing payment details.
 * @param {string} req.body.patientId - The ID of the patient making the payment.
 * @param {number} req.body.amount - The amount of the payment.
 * @param {string} req.body.paymentMethod - The method of payment (e.g., credit card, cash).
 * @param {Object} res - The response object from Express.js.
 * @returns {Promise<void>} - A promise that resolves when the payment process is complete.
 */
const makePayment = async (req, res) => {
    try {
        const { patientId, amount, paymentMethod } = req.body;

        const payment = new Payment({
            patientId,
            amount,
            paymentMethod
        });

        await payment.save();
        res.status(201).send('Payment made successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * Retrieves the payment history for a specific patient based on the patient ID provided in the query parameters.
 * Fetches payment records from the database and sends them in the response.
 * Sends an error response if there is a failure.
 * @function getPaymentHistory
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.query - The query parameters of the request.
 * @param {string} req.query.patientId - The ID of the patient whose payment history is being requested.
 * @param {Object} res - The response object from Express.js.
 * @returns {Promise<void>} - A promise that resolves when the payment history retrieval process is complete.
 */
const getPaymentHistory = async (req, res) => {
    try {
        const { patientId } = req.query;
        const payments = await Payment.find({ patientId }).populate('patientId', 'userId');
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * @description This module exports the functions related to payments.
 */
module.exports = { makePayment, getPaymentHistory };
