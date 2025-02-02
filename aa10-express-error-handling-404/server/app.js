const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});


app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found");
  error.statusCode = 404;
  next(error);
});


app.use((error, req, res, next) => {
  console.error(error); 
  res.status(error.statusCode || 500);
  res.json({
    message: error.message || "An unexpected error occurred",
    statusCode: error.statusCode || 500
  });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
