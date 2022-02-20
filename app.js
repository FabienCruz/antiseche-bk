const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (request, response, next) => { 
    response.json({ message: 'test avec nodemon' });
});

module.exports = app;

