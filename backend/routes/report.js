const express = require("express");
const {
  getOnlineReport,
  createReport,
} = require("../controllers/reportController");
const router = express.Router();

/**
 * @route GET /api/report
 * @desc Get online report for a patient
 *
 * This route handles fetching the online report for a patient. It expects a GET request
 * with the patient ID provided as a query parameter.
 * The `getOnlineReport` function from the reportController is used to process the request.
 *
 * @name getOnlineReport
 * @function
 * @memberof module:routers/reportRouter
 * @inner
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
router.get("/", getOnlineReport);

/**
 * @route POST /api/report
 * @desc Create a new report
 *
 * This route handles creating a new report. It expects a POST request
 * with the report details in the request body.
 * The `createReport` function from the reportController is used to process the request.
 *
 * @name createReport
 * @function
 * @memberof module:routers/reportRouter
 * @inner
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
router.post("/", createReport);

module.exports = router;
