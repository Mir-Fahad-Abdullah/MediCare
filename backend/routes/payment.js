/**
 * Express.js router for handling payment routes.
 * @module paymentRouter
 * @requires express
 * @requires ../controllers/paymentControllers
 */
const express = require('express');
const { makePayment, getPaymentHistory } = require('../controllers/paymentControllers');
const router = express.Router();

/**
 * @description Make an online payment
 */
router.post('/', makePayment);

/**
 * @description Get payment history for a patient
 */
router.get('/history', getPaymentHistory);

/** It exports the router for handling payment routes. */
module.exports = router;
