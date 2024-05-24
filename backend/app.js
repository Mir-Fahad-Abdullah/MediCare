/**
 * Various routes are set up for different endpoints
 * Each prefixed with '/api' followed by a specific path for the feature it handles
 */
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');
const appointmentRoutes = require('./routes/appointment');
const reviewRoutes = require('./routes/review');
const serialRoutes = require('./routes/serial');
const investigationRoutes = require('./routes/investigation');
const reportRoutes = require('./routes/report');
const paymentRoutes = require('./routes/payment');

/**
 * Express is initialized
 */
const app = express();

/**
 * Middleware to parse JSON request bodies
 */
app.use(bodyParser.json());

/**
 * Route handling for authentication-related endpoints
 * @name /api/auth
 * @function
 * @memberof module:express.Router
 */
app.use('/api/auth', authRoutes);

/**
 * Route handling for doctor-related endpoints
 * @name /api/doctor
 * @function
 * @memberof module:express.Router
 */
app.use('/api/doctor', doctorRoutes);

/**
 * Route handling for patient-related endpoints
 * @name /api/patient
 * @function
 * @memberof module:express.Router
 */
app.use('/api/patient', patientRoutes);

/**
 * Route handling for appointment-related endpoints
 * @name /api/appointment
 * @function
 * @memberof module:express.Router
 */
app.use('/api/appointment', appointmentRoutes);

/**
 * Route handling for review-related endpoints
 * @name /api/review
 * @function
 * @memberof module:express.Router
 */
app.use('/api/review', reviewRoutes);

/**
 * Route handling for serial-related endpoints
 * @name /api/serial
 * @function
 * @memberof module:express.Router
 */
app.use('/api/serial', serialRoutes);

/**
 * Route handling for investigation-related endpoints
 * @name /api/investigation
 * @function
 * @memberof module:express.Router
 */
app.use('/api/investigation', investigationRoutes);

/**
 * Route handling for report-related endpoints
 * @name /api/report
 * @function
 * @memberof module:express.Router
 */
app.use('/api/report', reportRoutes);

/**
 * Route handling for payment-related endpoints
 * @name /api/payment
 * @function
 * @memberof module:express.Router
 */
app.use('/api/payment', paymentRoutes);

module.exports = app;
