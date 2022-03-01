const { DATABASE_URL } = require("./config");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {},
});

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    //sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectToDataBase, sequelize }