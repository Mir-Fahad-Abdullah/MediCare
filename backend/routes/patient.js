const express = require('express');
const { getPatientProfile } = require('../controllers/patientController');
const router = express.Router();

/**
 * @route GET /api/patient/profile
 * @desc Get patient profile
 */
router.get('/profile', getPatientProfile);

module.exports = router;
