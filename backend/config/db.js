/**
 * Mongoose library for MongoDB connections.
 * @module mongoose
 */
const mongoose = require("mongoose");

/**
 * Connect to the MongoDB database.
 *
 * This function attempts to connect to a MongoDB database using the URI provided
 * in the environment variable `MONGODB_URI`. It uses Mongoose's `connect` method
 * with the `useNewUrlParser` and `useUnifiedTopology` options to avoid deprecation warnings.
 *
 * If the connection is successful, a success message is logged to the console.
 * If the connection fails, the error is caught and logged to the console.
 *
 * @function
 */

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
/**
 * Export the `connect` function.
 * @type {Object}
 * @property {Function} connect - Connect to the MongoDB database.
 */

module.exports = { connect };
