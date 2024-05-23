const express = require('express');
const { getDoctorList, getDoctorAppointments, updateOngoingSerial } = require('../controllers/doctorController');
const router = express.Router();

/**
 * @route GET /api/doctor/list
 * @desc Get list of doctors
 */
router.get('/list', getDoctorList);

/**
 * @route GET /api/doctor/appointments
 * @desc Get doctor appointments
 */
router.get('/appointments', getDoctorAppointments);

/**
 * @route POST /api/doctor/serial
 * @desc Update ongoing serial
 */
router.post('/serial', updateOngoingSerial);

module.exports = router;


