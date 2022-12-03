
const { Model , DataTypes } = require("sequelize");
const sequelize = require("../database/connection"); 



// var sequelize = require('../config/db.js'); //sequelize instance

// module.exports = function(application, req, res){

// var User = sequelize.define('user', { 



  module.exports = function(sequelize, DataTypes) {
    const Students = sequelize.define("Students", {
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
  
    return Students;
  }



// class Students extends Model {}
// Students.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: { type: DataTypes.STRING, allowNull: false },
//     age: { type: DataTypes.INTEGER, allowNull: false },
//   },
//   {
//     timestamps: false,
//     sequelize,
//     modelName: "student",
//   }
// );
