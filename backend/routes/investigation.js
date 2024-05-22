const express = require('express'); 

const { getInvestigationList } = require('../controllers/investigationController'); 

const router = express.Router(); 

 

/** 

 * @route GET /api/investigation/list 

 * @desc Get investigation list 

 */ 

router.get('/list', getInvestigationList); 

 

module.exports = router; 

 