
const express = require('express');
const app = express(); // Fixed typo

const port = process.env.PORT || 3000; // Fixed case sensitivity

app.use('/', require('./routes')); // Verify the correct router path

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});