const express = require("express");
const app = express();
const { connectToDataBase } = require('./util/db');

connectToDataBase();

const articlesRoutes = require('./routes/articles');

app.use(express.json());

app.use('api/articles', articlesRoutes);

module.exports = app;