const { DATABASE_URL } = require("./config");
const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");

// initialisation de sequelize

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    /*
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
    */
  },
});

// gestion des migrations

const migrationConf = {
  migrations: {
    glob: "migrations/*.js",
  },
  storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
  context: sequelize.getQueryInterface(),
  logger: console,
}

const runMigrations = async () => {
  const migrator = new Umzug(migrationConf);
  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};

const rollbackMigration = async () => {
  await sequelize.authenticate();
  const migrator = new Umzug(migrationConf);
  await migrator.down();
}

// connection à la base de données

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectToDataBase, sequelize, rollbackMigration };
