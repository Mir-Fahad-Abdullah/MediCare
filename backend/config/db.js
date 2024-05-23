/**
 * @fileoverview This module sets up a connection to the MongoDB database using Mongoose.
 */
const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database using the connection string provided in the environment variable `MONGODB_URI`.
 * The connection options are set to use the new URL parser and unified topology to avoid deprecation warnings.
 * Logs a message to the console upon successful connection, or logs an error if the connection fails.
 *
 * @function
 * @name connect
 * @returns {void}
 */
const connect = () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
};

/**
 * Exporting the connect function so that it can be imported and used in other parts of the application. 
 */
module.exports = { connect };

