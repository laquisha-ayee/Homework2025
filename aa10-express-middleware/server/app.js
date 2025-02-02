require('dotenv').config();

const express = require('express');
const app = express();

// Import express-async-errors to handle errors in async functions
require('express-async-errors');

// Middleware to parse JSON requests
app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    res.on('finish', () => {
        console.log(`Response Status: ${res.statusCode}`);
    });
    next();
});

// Import and use the Dog Router
const dogRouter = require('./routes/dogs');
app.use(dogRouter);

// Root route
app.get('/', (req, res) => {
    res.send('GET / This is the root URL');
});

// POST /test-json endpoint to test JSON middleware
app.post('/test-json', (req, res) => {
    res.json(req.body);
});

// GET /test-error endpoint to test async error handling
app.get('/test-error', async (req, res) => {
    throw new Error('Hello World!');
});

// "Resource Not Found" middleware
app.use((req, res, next) => {
    const error = new Error("Sorry, the requested resource couldn't be found");
    error.statusCode = 404;
    next(error);
});

// Catch-all errors middleware
app.use((error, req, res, next) => {
    console.error(error); // Log the error to the server console
    res.status(error.statusCode || 500);
    res.json({
        message: error.message || "Something went wrong",
        statusCode: error.statusCode || 500,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
    });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
