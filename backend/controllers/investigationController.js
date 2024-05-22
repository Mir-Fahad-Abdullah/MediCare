const Investigation = require('../models/investigation'); 

 

/** 

 * @desc Get investigation list 

 * @param req 

 * @param res 

 */ 

const getInvestigationList = async (req, res) => { 

    try { 

        const investigations = await Investigation.find(); 

        res.status(200).json(investigations); 

    } catch (error) { 

        res.status(500).send(error.message); 

    } 

}; 

 

module.exports = { getInvestigationList }; 

 

 

 

 

 