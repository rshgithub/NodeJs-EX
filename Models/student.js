
const { Model , DataTypes } = require("sequelize");
const sequelize = require("../database/connection"); 

class Students extends Model {}
Students.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "student",
  }
);


module.export = Students ;