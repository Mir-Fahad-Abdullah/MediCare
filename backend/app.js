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

 

const app = express(); 

 

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

 

module.exports = app; 
