const sequelize = require("./connection"); 

sequelize.sync({ force: false }).then(() => {
    console.log("Database Build");
  });

  module.export = sequelize ;