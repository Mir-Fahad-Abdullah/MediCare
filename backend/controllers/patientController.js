/**
 * importing the Patient model from the models directory. 
 */
const Patient = require('../models/patient');

/**
 * @description Get patient profile
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} - Returns the profile of a specific patient.
 */
const getPatientProfile = async (req, res) => {
    try {
        const { patientId } = req.query;
        const patient = await Patient.findById(patientId).populate('userId', 'name email contactNumber');
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * The function getPatientProfile is exported as a module to be used in other parts of the application.
 */
module.exports = { getPatientProfile };
