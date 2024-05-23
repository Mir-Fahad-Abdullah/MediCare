/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Importing route modules.
 */
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');
const appointmentRoutes = require('./routes/appointment');
const reviewRoutes = require('./routes/review');
const serialRoutes = require('./routes/serial');
const investigationRoutes = require('./routes/investigation');

/**
 * Express application.
 * 
 * @type {Express}
 */
const app = express();

/**
 * These lines mount the imported route modules at specific paths in the Express application.
 */
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/serial', serialRoutes);
app.use('/api/investigation', investigationRoutes);

/**This line uses module.exports to export the app object */
module.exports = app;
