const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

class Access extends Model {}

Access.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    siteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "sites", key: "id" },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "access",
  }
);

module.exports = Access;
