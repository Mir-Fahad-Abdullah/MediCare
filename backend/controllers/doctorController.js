/**
 * The code starts by importing the Doctor and Appointment models from the models directory. 
 */
const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');

/**
 * @description Get list of doctors
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} - Returns a list of doctors.
 */
const getDoctorList = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('userId', 'name');
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * @description Get doctor appointments
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} - Returns a list of appointments for a specific doctor.
 */
const getDoctorAppointments = async (req, res) => {
    try {
        const { doctorId } = req.query;
        const appointments = await Appointment.find({ doctorId }).populate('patientId', 'name');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * @description Update ongoing serial for a doctor
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>} - Updates the ongoing serial number for a doctor.
 */
const updateOngoingSerial = async (req, res) => {
    try {
        const { doctorId, serialNumber } = req.body;
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).send('Doctor not found');
        }

        doctor.ongoingSerial = serialNumber;
        await doctor.save();

        res.status(200).send('Ongoing serial updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

/**
 * The functions getDoctorList, getDoctorAppointments, and updateOngoingSerial are exported as
 * a module to be used in other parts of the application.
 */
module.exports = { getDoctorList, getDoctorAppointments, updateOngoingSerial };
