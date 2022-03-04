const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../util/db");

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
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    lastUpdated: {
      type: DataTypes.DATEONLY,
    },
    themaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    siteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sites', key: 'id'},
    }
  },
  {
    sequelize,
    modelName: "article",
  }
);

module.exports = Article;
