const Students = require('./../../Models/student');

const getStudentByName = async (req, res) => {
  const data = await Students.findOne({
    where: {
      id: req.params.id,
    },
  });

  res.send({
    data,
  });


};
  
  module.exports = getStudentByName