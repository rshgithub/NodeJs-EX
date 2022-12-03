const Students = require('./../../Models/student');

const getStudentsList = async (req, res) => {
    const data = await Students.findAll();
    res.send({
      data,
    });
    
  };
  
  module.exports = getStudentsList