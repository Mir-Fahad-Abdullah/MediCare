/**
 * Importing the Doctor model.
 * 
 * The Doctor model is defined in the `../models/doctor` file.
 * This allows us to interact with the Doctor collection in the MongoDB database using Mongoose.
 * 
 * @constant {Object} Doctor - The Mongoose model for the Doctor collection.
 * @requires ../models/doctor
 */
const Doctor = require('../models/doctor'); 
/**
 * Get ongoing serial for a specific doctor.
 * 
 * This asynchronous function retrieves the ongoing serial number for a doctor
 * identified by the `doctorId` parameter in the request. If the doctor is found,
 * it sends the ongoing serial number as a JSON response. If the doctor is not
 * found, it sends a 404 status code with an appropriate message. If an error
 * occurs, it sends a 500 status code with the error message.
 * 
 * @param {Object} req - The request object from Express.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.doctorId - The ID of the doctor.
 * @param {Object} res - The response object from Express.
 * @returns {void}
 */
const getOngoingSerial = async (req, res) => { 
    try { 
        const { doctorId } = req.params; 
        const doctor = await Doctor.findById(doctorId); 
        if (!doctor) { 
            return res.status(404).send('Doctor not found'); 
        } 
        res.status(200).json({ ongoingSerial: doctor.ongoingSerial }); 
    } catch (error) { 
        res.status(500).send(error.message); 
    } 
}; 
/**
 * Exports the getOngoingSerial function.
 * 
 * This allows other modules to import and use the getOngoingSerial function
 * to handle requests for retrieving the ongoing serial number for a specific doctor.
 * 
 * @module getOngoingSerial
 */
module.exports = { getOngoingSerial }; 