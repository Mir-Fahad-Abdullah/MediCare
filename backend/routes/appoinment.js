const express = require("express");
const { bookAppointment } = require("../controllers/appointmentController");
const router = express.Router();

/**
 * @route POST /api/appointment/book
 * @desc Book an appointment
 *
 * This route handles booking an appointment. It expects a POST request
 * with the necessary appointment details in the request body.
 * The `bookAppointment` function from the appointmentController is used
 * to process the request.
 *
 * @name bookAppointment
 * @function
 * @memberof module:routers/appointmentRouter
 * @inner
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
router.post("/book", bookAppointment);

module.exports = router;
