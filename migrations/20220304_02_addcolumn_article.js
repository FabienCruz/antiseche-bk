const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("articles", "themaId", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn("articles", "userId", {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn("articles", "siteId", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "sites", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("articles", "themaId");
    await queryInterface.removeColumn("articles", "userId");
    await queryInterface.removeColumn("articles", "siteId");
  },
};