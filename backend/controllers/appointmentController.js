const Appointment = require("../models/appointment");
/**
 * Book an appointment
 *
 * This function handles booking an appointment by creating a new appointment
 * record in the database. It expects the request body to contain `patientId`,
 * `doctorId`, and `appointmentDate`. If the appointment is successfully created,
 * it responds with a status code 201 and a success message. In case of an error,
 * it responds with a status code 500 and the error message.
 *
 * @async
 * @function
 * @param {Object} req - The request object from the client
 * @param {Object} req.body - The body of the request
 * @param {string} req.body.patientId - The ID of the patient booking the appointment
 * @param {string} req.body.doctorId - The ID of the doctor for the appointment
 * @param {Date} req.body.appointmentDate - The date and time of the appointment
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>} - A promise that resolves when the operation is complete
 */

const bookAppointment = async (req, res) => {
  try {
    // Save the appointment to the database
    const { patientId, doctorId, appointmentDate } = req.body;

    const appointment = new Appointment({
      patientId,
      doctorId,
      appointmentDate,
    });

    await appointment.save(); // Send success response
    res.status(201).send("Appointment booked successfully"); // Handle errors
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { bookAppointment };
