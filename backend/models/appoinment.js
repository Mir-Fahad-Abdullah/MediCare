const mongoose = require("mongoose");
/**
 * Appointment schema for MongoDB using Mongoose.
 *
 * Defines the structure of an appointment document in the MongoDB database.
 *
 * @typedef {Object} Appointment
 * @property {mongoose.Schema.Types.ObjectId} patientId - Reference to the Patient model
 * @property {mongoose.Schema.Types.ObjectId} doctorId - Reference to the Doctor model
 * @property {Date} appointmentDate - The date and time of the appointment
 * @property {string} status - The status of the appointment, can be 'Pending', 'Confirmed', or 'Cancelled'
 */

/**
 * Appointment schema.
 *
 * This schema represents the structure of an appointment document in the MongoDB database.
 * It includes references to patient and doctor documents, the date of the appointment,
 * and the status of the appointment.
 *
 * @type {mongoose.Schema<Appointment>}
 */

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    appointmentDate: { type: Date, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

/**
 * Appointment model.
 *
 * This model is used to interact with the appointments collection in the MongoDB database.
 *
 * @type {mongoose.Model<Appointment>}
 */

module.exports = mongoose.model("Appointment", appointmentSchema);
