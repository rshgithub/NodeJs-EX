const {Student} = require("../../database/models")
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