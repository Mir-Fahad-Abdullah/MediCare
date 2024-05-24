/**
 * Importing the Investigation model.
 * 
 * The Investigation model is defined in the `../models/investigation` file.
 * This allows us to interact with the Investigation collection in the MongoDB database using Mongoose.
 * 
 * @constant {Object} Investigation - The Mongoose model for the Investigation collection.
 * @requires ../models/investigation
 */
const Investigation = require('../models/investigation'); 

/**
 * Get investigation list
 * 
 * This asynchronous function retrieves all investigations from the database
 * and sends them as a JSON response. If an error occurs, it sends a 500 status
 * code along with the error message.
 * 
 * @param {Object} req - The request object from Express.
 * @param {Object} res - The response object from Express.
 * @returns {void}
 */

const getInvestigationList = async (req, res) => { 

    try { 
        const investigations = await Investigation.find(); 
        res.status(200).json(investigations); 
    } catch (error) { 
        res.status(500).send(error.message); 
    } 
}; 
/**
 * Exports the getInvestigationList function.
 * 
 * This allows other modules to import and use the getInvestigationList function
 * to handle requests for retrieving investigation lists.
 * 
 * @module getInvestigationList
 */
module.exports = { getInvestigationList }; 

 

 

 

 

 