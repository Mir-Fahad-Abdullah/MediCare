/**
 * Import required modules.
 */

/**
 * Supertest is used to test HTTP endpoints.
 */
const request = require('supertest'); 

/**
 * Express is a web application framework for Node.js.
 */
const express = require('express'); 

/**
 * Body-parser is used to parse incoming request bodies.
 */
const bodyParser = require('body-parser'); 

/**
 * Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
 */
const mongoose = require('mongoose'); 

/**
 *  Bcrypt is used for hashing passwords.
 */
const bcrypt = require('bcrypt'); 

/**
 * JSON Web Token is used for authentication.
 */
const jwt = require('jsonwebtoken');


/**
 *  Import the loginUser function from the authController module.
 */
const { loginUser } = require('../src/authController'); 

/**
 * Import the User model.
 */
const User = require('../src/models/user'); // 

/**
 * Create an instance of an Express application.
 */
const app = express();
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON request bodies.
app.post('/loginUser', loginUser); // Define a POST route for /loginUser and associate it with the loginUser function.

/**
 * Describe the test suite for the User Controller's loginUser functionality.
 */
describe('User Controller - loginUser', () => {
    /**
     * Before all tests, drop the database to ensure a clean state.
     */
    beforeAll(async () => {
        await mongoose.connection.db.dropDatabase(); // Drop the database to ensure no pre-existing data affects tests.
    });

    /**
     * After each test, delete all User documents to maintain isolation between tests.
     */
    afterEach(async () => {
        await User.deleteMany({}); // Delete all user documents after each test.
    });

    /**
     * Describe the tests for the POST /loginUser route.
     */
    describe('POST /loginUser', () => {
        /**
         * Test case for successful user login and JWT token return.
         */
        it('should login user and return a JWT token', async () => {
            const hashedPassword = await bcrypt.hash('password123', 10); // Hash the password.
            const user = new User({
                name: 'John Doe',
                username: 'johndoe',
                email: 'john@example.com',
                contactNumber: '1234567890',
                password: hashedPassword,
                role: 'Patient'
            });
            await user.save(); // Save the user to the database.

            const res = await request(app)
                .post('/loginUser') // Send a POST request to /loginUser.
                .send({
                    username: 'johndoe',
                    password: 'password123',
                    role: 'Patient'
                });

            expect(res.status).toBe(200); // Expect a 200 OK status.
            expect(res.body).toHaveProperty('token'); // Expect the response body to have a token property.

            const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET); // Verify the JWT token.
            expect(decoded.userId).toBe(user._id.toString()); // Expect the userId in the token to match the user's ID.
        });

        /**
         * Test case for user not found scenario.
         */
        it('should return status 404 if user is not found', async () => {
            const res = await request(app)
                .post('/loginUser') // Send a POST request to /loginUser.
                .send({
                    username: 'notfounduser',
                    password: 'password123',
                    role: 'Patient'
                });

            expect(res.status).toBe(404); // Expect a 404 Not Found status.
            expect(res.text).toBe('User not found'); // Expect the response text to be 'User not found'.
        });

        /**
         * Test case for incorrect password scenario.
         */
        it('should return status 400 if password is incorrect', async () => {
            const hashedPassword = await bcrypt.hash('password123', 10); // Hash the password.
            const user = new User({
                name: 'John Doe',
                username: 'johndoe',
                email: 'john@example.com',
                contactNumber: '1234567890',
                password: hashedPassword,
                role: 'Patient'
            });
            await user.save(); // Save the user to the database.

            const res = await request(app)
                .post('/loginUser') // Send a POST request to /loginUser.
                .send({
                    username: 'johndoe',
                    password: 'wrongpassword',
                    role: 'Patient'
                });

            expect(res.status).toBe(400); // Expect a 400 Bad Request status.
            expect(res.text).toBe('Invalid credentials'); // Expect the response text to be 'Invalid credentials'.
        });

        /**
         * Test case for server error scenario.
         */
        it('should return status 500 if there is an error', async () => {
            jest.spyOn(User, 'findOne').mockImplementationOnce(() => {
                throw new Error('Error finding user'); // Mock an error when finding a user.
            });

            const res = await request(app)
                .post('/loginUser') // Send a POST request to /loginUser.
                .send({
                    username: 'johndoe',
                    password: 'password123',
                    role: 'Patient'
                });

            expect(res.status).toBe(500); // Expect a 500 Internal Server Error status.
            expect(res.text).toBe('Error finding user'); // Expect the response text to be 'Error finding user'.
        });
    });
});
