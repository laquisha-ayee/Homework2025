const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const colorsRouter = require('./routes/colors'); // Ensure colorsRouter is required

app.use(express.json());

app.use('/people', peopleRouter); 
app.use('/colors', colorsRouter); // Connect the colors router as well

// DO NOT EDIT - Set port and listener
if (require.main === module) {
    const port = 5000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
