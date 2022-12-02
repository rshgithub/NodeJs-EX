const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize.authenticate().then(() => {
  console.log("Database Connected");
});

module.export = sequelize;
