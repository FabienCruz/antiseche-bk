const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

class Site extends Model {}

Site.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validate: {
        is: /[a-zA-Z0-9\-]/
      }
    },
  },
  {
    sequelize,
    modelName: "site",
  }
);

module.exports = Site;
