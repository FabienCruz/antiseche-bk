const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("articles", {
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
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("articles");
  },
};
