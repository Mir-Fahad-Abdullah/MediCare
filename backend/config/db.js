/**
 * @fileoverview This module sets up and exports a function to connect to a MongoDB database using Mongoose.
 */

const mongoose = require('mongoose');
/**
 * Connects to the MongoDB database using the connection string provided in the environment variable MONGODB_URI.
 * Utilizes Mongoose for managing the connection.
 * Logs a message upon successful connection or logs an error if the connection fails.
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
 * we are exporting an object that contains the connect function.
 */
module.exports = { connect };
