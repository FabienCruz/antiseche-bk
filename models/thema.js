const { DataTypes, Model } = require("sequelize");

const { sequelize } = require("../util/db");

class Thema extends Model {}

Thema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("tiny"),
    },
    siteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sites', key: 'id'},
    },
  },
  {
    sequelize,
    modelName: "thema",
  }
);

module.exports = Thema;
