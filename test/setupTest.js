/**
 * Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
 */
const mongoose = require('mongoose');

/**
 * MongoMemoryServer provides an in-memory MongoDB server for testing purposes.
 */
const { MongoMemoryServer } = require('mongodb-memory-server');


/**
 * Declare a variable to hold the instance of the in-memory MongoDB server.
 */
let mongoServer; 

/**
 * Before all tests, start the in-memory MongoDB server and connect Mongoose to it.
 */
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create(); // Create an instance of the in-memory MongoDB server.
    const uri = mongoServer.getUri(); // Get the connection URI for the in-memory MongoDB server.
    process.env.MONGODB_URI = uri; // Set the connection URI in the environment variable for use in the application.
    process.env.JWT_SECRET = 'testsecret'; // Set a secret key for JWT in the environment variable for testing purposes.
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect Mongoose to the in-memory MongoDB server.
});

/**
 * After all tests, drop the database, close the Mongoose connection, and stop the in-memory MongoDB server.
 */
afterAll(async () => {
    await mongoose.connection.dropDatabase(); // Drop the database to ensure no data is retained after tests.
    await mongoose.connection.close(); // Close the Mongoose connection.
    await mongoServer.stop(); // Stop the in-memory MongoDB server.
});
