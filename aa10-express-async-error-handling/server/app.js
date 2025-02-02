// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();
const delay = require('./modules/delay');

/**
 * Step 2 - Require package to handle asynchronous errors
 */
// Your code here 

// Express using json - DO NOT MODIFY
app.use(express.json());

// Handle async processing with Promise using async / await - DO NOT MODIFY
app.get('/wait1sec', async (req, res) => {
    const response = await delay.wait1();
    res.json({
        message: response,
    });
});

// Handle async processing with Promise using .then()
app.get('/wait4me', async (req, res, next) => {
    delay.wait4()
        .then(response => {
            res.json({
                message: response,
            });
        })
        /**
         * Step 4 - Handle error with .catch()
         */
        // Your code here 
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Custom error middleware (triggered by the express-async-errors package)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(400);
    res.json({
        error: err.message,
    });
});

// Custom 404 (path not defined)
app.use((req, res) => {
    res.status(404);
    res.json({
        error: 'not found'
    });
})

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
