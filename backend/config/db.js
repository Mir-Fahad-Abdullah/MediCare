/**
 * Importing the Mongoose library.
 * Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
 * It provides a schema-based solution to model application data and includes built-in type casting, validation, query building, and business logic hooks.
 *
 * @constant {Object} mongoose - The Mongoose library used to interact with MongoDB databases.
 * @requires mongoose
 */
const mongoose = require('mongoose'); 
/**
 * Connects to the MongoDB database using Mongoose.
 * 
 * The connection URI is retrieved from the environment variable `MONGODB_URI`.
 * The options `useNewUrlParser` and `useUnifiedTopology` are set to true to use the new MongoDB driver's connection management engine.
 * 
 * If the connection is successful, it logs "MongoDB connected" to the console.
 * If an error occurs, it logs the error to the console.
 * 
 * @function connect
 */
const connect = () => { 
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
        .then(() => console.log('MongoDB connected')) 
        .catch(err => console.log(err)); 
}; 
/**
 * Exports the connect function.
 * 
 * This allows other modules to import and use the connect function to establish a connection to the MongoDB database.
 * 
 * @module connect
 */
module.exports = { connect }; 