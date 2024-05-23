/**
 * Express web application framework.
 * 
 * Express is a web application framework for Node.js, providing a robust set of features
 * for building web and mobile applications. It simplifies the process of creating web servers
 * and defining routes, middleware, and request handlers.
 * 
 * @module express
 */

const express = require('express'); 
/**
 * Controller function for retrieving the ongoing serial for a specific doctor.
 * 
 * This function is responsible for handling requests related to retrieving
 * the ongoing serial number for a specific doctor. It likely interacts with
 * a database to find the doctor by ID and retrieve their ongoing serial number.
 * 
 * @function getOngoingSerial
 * @memberof module:controllers/serialController
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */

const { getOngoingSerial } = require('../controllers/serialController'); 
/**
 * Express router for defining routes.
 * 
 * Routers in Express are middleware and routing system that allow modular, mountable
 * route handlers to be defined. They simplify the process of defining and organizing
 * routes for an Express application.
 * 
 * @typedef {Object} ExpressRouter
 * @property {Function} get - Method for defining a GET route.
 * @property {Function} post - Method for defining a POST route.
 * @property {Function} put - Method for defining a PUT route.
 * @property {Function} delete - Method for defining a DELETE route.
 * @property {Function} use - Method for using middleware.
 */
const router = express.Router(); 

/**
 * Express route definition for retrieving the ongoing serial for a specific doctor.
 * 
 * This route definition specifies a GET route for the path '/api/serial/:doctorId'.
 * When a GET request is made to this path, the 'getOngoingSerial' controller function
 * is invoked to handle the request and send a response.
 * 
 * @function GET_/api/serial/:doctorId
 * @memberof module:routes/serialRoutes
 * @param {string} path - The route path.
 * @param {Function} handler - The route handler function.
 * @returns {void}
 */


router.get('/:doctorId', getOngoingSerial); 

 /**
 * Express router instance.
 * 
 * This object is an instance of the Express Router, which is used to define routes
 * for handling incoming HTTP requests. It is initialized using the `express.Router()`
 * method and can be used to define routes and middleware.
 * 
 * @type {ExpressRouter}
 */

module.exports = router; 