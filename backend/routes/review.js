/**
 * Express.js router for handling doctor review routes.
 * @requires express
 * @requires ../controllers/reviewController
 */
const express = require('express');
const { getDoctorReviews, createReview } = require('../controllers/reviewController');
const router = express.Router();

/**
 * @description Get reviews for a specific doctor
 */
router.get('/:doctorId', getDoctorReviews);

/**
 * @description Create a review
 */
router.post('/', createReview);

/** It exports the router for handling doctor review routes. */
module.exports = router;
