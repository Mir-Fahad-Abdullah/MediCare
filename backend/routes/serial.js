const express = require('express'); 

const { getOngoingSerial } = require('../controllers/serialController'); 

const router = express.Router(); 

 

/** 

 * @route GET /api/serial/:doctorId 

 * @desc Get ongoing serial for a specific doctor 

 */ 

router.get('/:doctorId', getOngoingSerial); 

 

module.exports = router; 