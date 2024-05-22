const Patient = require('../models/patient');

/**
 * @desc Get patient profile
 * @param req
 * @param res
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

module.exports = { getPatientProfile };
