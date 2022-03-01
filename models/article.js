const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../util/db');

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(124),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    modelName: "article",
  }
);

Article.sync();

module.exports = Article