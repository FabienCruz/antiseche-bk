const express = require("express");
require('dotenv').config()
const { Sequelize } = require('sequelize')

const app = express();

app.use(express.json());

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
  },
})

const main = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

app.get('/', (request, response, next) => { 
    response.json({ message: 'test avec nodemon' });
});

main()

module.exports = app;

