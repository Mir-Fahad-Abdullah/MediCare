const Report = require("../models/report");
/**
 * Get online report for a patient
 *
 * This function retrieves all reports for a specific patient based on the `patientId`
 * provided in the query parameters. It populates the `patientId` field with the `userId`
 * from the referenced document and sends the reports in JSON format if found.
 *
 * @async
 * @function
 * @param {Object} req - The request object from the client
 * @param {Object} req.query - The query parameters of the request
 * @param {string} req.query.patientId - The ID of the patient whose reports are being requested
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>} - A promise that resolves when the operation is complete
 */

getOnlineReport = async (req, res) => {
  try {
    const { patientId } = req.query;
    const reports = await Report.find({ patientId }).populate(
      "patientId",
      "userId"
    );
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
/**
 * Create a new report
 *
 * This function creates a new report based on the data provided in the request body.
 * It saves the report to the database and sends a success message if the operation
 * is successful. In case of an error, it sends the error message.
 *
 * @async
 * @function
 * @param {Object} req - The request object from the client
 * @param {Object} req.body - The body of the request
 * @param {string} req.body.patientId - The ID of the patient for whom the report is created
 * @param {string} req.body.testName - The name of the test for the report
 * @param {string} req.body.reportContent - The content of the report
 * @param {Date} req.body.reportDate - The date of the report
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>} - A promise that resolves when the operation is complete
 */

/**
 * Creates a new report.
 * @async
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */

const createReport = async (req, res) => {
  try {
    const { patientId, testName, reportContent, reportDate } = req.body;

    const report = new Report({
      patientId,
      testName,
      reportContent,
      reportDate,
    });

    // Save the report to the database
    await report.save();
    // Send success response

    res.status(201).send("Report created successfully");
  } catch (error) {
    // Handle errors
    res.status(500).send(error.message);
  }
};

/**
 * Module representing report-related functions.
 * @module reportFunctions
 */

/**
 * Function to get online report for a patient.
 * @function getOnlineReport
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 * @example
 * // Example usage:
 * getOnlineReport(req, res)
 *    .then(() => console.log('Online report fetched successfully'))
 *    .catch(err => console.error('Error fetching online report:', err));
 */

/**
 * Function to create a new report.
 * @function createReport
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 * @example
 * // Example usage:
 * const newReportData = {
 *    patientId: '...',
 *    testName: '...',
 *    reportContent: '...',
 *    reportDate: '...'
 * };
 * createReport(req, res)
 *    .then(() => console.log('Report created successfully'))
 *    .catch(err => console.error('Error creating report:', err));
 */

module.exports = {
  getOnlineReport,
  createReport,
};
