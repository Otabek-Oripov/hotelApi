const express = require('express');
const pool = require('./db/db');
const app = express();
const PORT = 4000;


app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000")
});


