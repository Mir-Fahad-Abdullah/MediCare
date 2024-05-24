/**
 * Review model that defines the structure and methods for review documents in the MongoDB database.
 * @requires module:../models/review
 * @type {Model}
 */
const Review = require('../models/review');

/**
 * Retrieves the reviews for a specific doctor based on the doctor ID provided in the request parameters.
 * Fetches review records from the database and sends them in the response.
 * Sends an error response if there is a failure.
 * @function getDoctorReviews
 * @param {Object} req - The request object from Express.js.
 * @param {Object} req.params - The URL parameters of the request.
 * @param {string} req.params.doctorId - The ID of the doctor whose reviews are being requested.
 * @param {Object} res - The response object from Express.js.
 * @returns {Promise<void>} - A promise that resolves when the reviews retrieval process is complete.
 */
const getDoctorReviews = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const reviews = await Review.find({ doctorId }).populate('patientId', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * Creates a new review document in the database.
 * @param {Object} req - The request object containing the review data in the request body.
 * @param {Object} res - The response object used to send HTTP responses.
 * @returns {Promise<void>}
 */
const createReview = async (req, res) => {
    try {
        const { doctorId, patientId, rating, comment } = req.body;

        const review = new Review({
            doctorId,
            patientId,
            rating,
            comment
        });

        await review.save();
        res.status(201).send('Review created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * @module
 * @description This module exports the functions related to doctor reviews.
 */
module.exports = { getDoctorReviews, createReview };
