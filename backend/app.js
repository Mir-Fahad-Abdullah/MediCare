/**
 * Express web application framework.
 * 
 * Express is a web application framework for Node.js, providing a robust set of features
 * for building web and mobile applications. It simplifies the process of creating web servers
 * and defining routes, middleware, and request handlers.
 * 
 * @module express
 */

const express = require('express'); 
/**
 * Body parsing middleware for Express.
 * 
 * bodyParser is a middleware for Express.js that extracts the entire body portion
 * of an incoming request stream and exposes it on req.body as an object. It parses
 * the request body and makes it available for further processing within the Express application.
 * 
 * @module body-parser
 */

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
const reportRoutes = require('./routes/report'); 
const paymentRoutes = require('./routes/payment'); 

 
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
app.use('/api/report', reportRoutes); 
app.use('/api/payment', paymentRoutes); 

 
/**This line uses module.exports to export the app object */
module.exports = app; 
