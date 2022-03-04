// Generate app

const express = require("express");
const app = express();

// CORS

const cors = require('cors');
app.use(cors());

// Connection to DataBase

const { connectToDataBase } = require('./util/db');
connectToDataBase();

// Routes

const articlesRoutes = require('./routes/articles');
app.use(express.json());
app.use('/api/articles', articlesRoutes);

module.exports = app;