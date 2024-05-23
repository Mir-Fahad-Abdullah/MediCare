/**
 * Importing the 'app' module, , which is the Express application
 */
const app = require('./app');

/**
 * Importing the 'db' module, which handles the database connection
 */
const db = require('./config/db');

/**
 * The port number on which the server will listen is defined. 
 * It uses the PORT environment variable if available, otherwise defaults to 3000
 */
const PORT = process.env.PORT || 3000;

/**
 * Connect to the database
 * @function
 * @memberof module:config/db
 */
db.connect();

/**
 * Start the Express server
 * @param {number} PORT - The port number on which the server will listen
 * @param {function} callback - Callback function to log the server status
 * @memberof module:express
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
