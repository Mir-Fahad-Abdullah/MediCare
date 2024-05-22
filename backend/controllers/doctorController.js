const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');

/**
 * @desc Get list of doctors
 * @param req
 * @param res
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
 * @desc Get doctor appointments
 * @param req
 * @param res
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
 * @desc Update ongoing serial
 * @param req
 * @param res
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

module.exports = { getDoctorList, getDoctorAppointments, updateOngoingSerial };
