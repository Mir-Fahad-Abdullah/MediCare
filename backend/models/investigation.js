/**
 * Importing the Mongoose library.
 * 
 * Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
 * It provides a schema-based solution to model application data and includes
 * built-in type casting, validation, query building, business logic hooks, and more.
 * 
 * @constant {Object} mongoose - The Mongoose library.
 * @requires mongoose
 */
const mongoose = require('mongoose'); 
/**
 * Mongoose schema for investigations.
 * 
 * This schema defines the structure of documents in the "investigations" collection.
 * Each document represents an investigation with testName, hospitalName, and price fields.
 * Additionally, the schema includes automatic timestamps for createdAt and updatedAt.
 * 
 * @typedef {Object} InvestigationSchema
 * @property {string} testName - The name of the investigation test. Required.
 * @property {string} hospitalName - The name of the hospital where the investigation is conducted. Required.
 * @property {number} price - The price of the investigation. Required.
 * @property {Date} createdAt - The timestamp indicating when the document was created.
 * @property {Date} updatedAt - The timestamp indicating when the document was last updated.
 */

/**
 * Mongoose schema object for investigations.
 * 
 * This object defines the schema structure for the "investigations" collection in MongoDB.
 * It includes fields for testName, hospitalName, price, and automatic timestamps.
 * 
 * @type {InvestigationSchema}
 */
const investigationSchema = new mongoose.Schema({ 

    testName: { type: String, required: true }, 

    hospitalName: { type: String, required: true }, 

    price: { type: Number, required: true } 

}, { timestamps: true }); 
/**
 * Mongoose schema object for investigations.
 * 
 * This object defines the schema structure for the "investigations" collection in MongoDB.
 * It includes fields for testName, hospitalName, price, and automatic timestamps.
 * 
 * @type {InvestigationSchema}
 */
 
module.exports = mongoose.model('Investigation', investigationSchema); 