const mongoose = require("mongoose");

/**
 * Report schema for MongoDB using Mongoose.
 *
 * Defines the structure of a report document in the MongoDB database.
 *
 * @typedef {Object} Report
 * @property {mongoose.Schema.Types.ObjectId} patientId - Reference to the Patient model
 * @property {string} testName - The name of the test
 * @property {string} reportContent - The content of the report
 * @property {Date} reportDate - The date of the report
 */

/**
 * Report schema.
 *
 * This schema represents the structure of a report document in the MongoDB database.
 * It includes a reference to the patient document, the name of the test, the content of the report,
 * and the date of the report. Timestamps for creation and last update are automatically added.
 *
 * @type {mongoose.Schema<Report>}
 */
const reportSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    testName: { type: String, required: true },
    reportContent: { type: String, required: true },
    reportDate: { type: Date, required: true },
  },
  { timestamps: true }
);

/**
 * Report model.
 *
 * This model is used to interact with the reports collection in the MongoDB database.
 *
 * @type {mongoose.Model<Report>}
 */
module.exports = mongoose.model("Report", reportSchema);
